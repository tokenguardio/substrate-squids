// @ts-nocheck
import ts from "typescript";
import fs from "fs";
import path from "path";

interface ClassInfo {
  className: string;
  name: string;
  numGetters: number;
  getters: string[];
}

enum TransactionType {
  Call = "call",
  Event = "event",
}

class MappingGenerator {
  private readonly classInfoList: ClassInfo[] = [];
  private readonly typeUpper: string;

  constructor(
    private readonly sourceFile: string,
    private readonly prefixes: string[],
    private readonly type: string
  ) {
    if (type !== "event" && type !== "call") {
      throw new Error("Invalid type. Type must be either 'event' or 'call'");
    } else {
      this.typeUpper = type.charAt(0).toUpperCase() + type.slice(1);
    }
  }

  private parseSourceFile() {
    const fileName = path.resolve(__dirname, this.sourceFile);
    const sourceCode = fs.readFileSync(fileName).toString();
    const sourceFile = ts.createSourceFile(
      fileName,
      sourceCode,
      ts.ScriptTarget.ESNext,
      /* setParentNodes */ true,
      ts.ScriptKind.TS
    );

    const classes = sourceFile.statements.filter(
      (node) =>
        ts.isClassDeclaration(node) &&
        node.members.some((m) => ts.isConstructorDeclaration(m))
    );

    for (const cls of classes) {
      if (ts.isClassDeclaration(cls)) {
        const className = cls.name?.getText(sourceFile);
        const constructor = cls.members.find((node) => {
          if (ts.isConstructorDeclaration(node)) {
            return node.body !== undefined;
          }
          return false;
        }) as ts.ConstructorDeclaration;

        if (constructor && ts.isConstructorDeclaration(constructor)) {
          const assertCall = constructor.body?.statements.find(
            (node) =>
              ts.isExpressionStatement(node) &&
              ts.isCallExpression(node.expression) &&
              ts.isIdentifier(node.expression.expression) &&
              node.expression.expression.getText(sourceFile) === "assert"
          );
          if (
            assertCall &&
            ts.isExpressionStatement(assertCall) &&
            ts.isCallExpression(assertCall.expression)
          ) {
            const arg = assertCall.expression.arguments[0];
            if (
              arg &&
              ts.isBinaryExpression(arg) &&
              arg.operatorToken.kind ===
                ts.SyntaxKind.EqualsEqualsEqualsToken &&
              ts.isPropertyAccessExpression(arg.left) &&
              arg.left.expression.getText(sourceFile) === this.type &&
              arg.left.name.getText(sourceFile) === "name" &&
              ts.isStringLiteral(arg.right)
            ) {
              const name = arg.right.text;

              const numGetters = cls.members.filter((node) =>
                ts.isGetAccessorDeclaration(node)
              ).length;

              const getters = cls.members
                .filter((m) => ts.isGetAccessorDeclaration(m))
                .map((m) => m.name.getText(sourceFile));

              this.classInfoList.push({
                className: className ?? "",
                name: name,
                numGetters: numGetters,
                getters: getters,
              });
            }
          }
        }
      }
    }
  }

  public generateMappings() {
    this.parseSourceFile();
    const outputFolderPath = path.resolve(__dirname, `./${this.type}s`);

    if (!fs.existsSync(outputFolderPath)) {
      fs.mkdirSync(outputFolderPath);
      console.log(`Mappings folder created at: ${outputFolderPath}`);
    }

    for (const prefix of this.prefixes) {
      const filteredClasses = this.classInfoList.filter((cls) =>
        cls.name.startsWith(prefix)
      );

      const template = `import {
        ${filteredClasses
          .map((c) => `  ${c.className},\n`)
          .join("")}} from "../../types/${this.type}s";
        import { ChainContext, ${this.typeUpper} } from "../../types/support";
        import { bufferToHex } from "../../utils/utils";
        import { UnknownVersionError, Unknown${
          this.typeUpper
        }Error} from "../../utils/errors";
        
        export function normalize${prefix.slice(0, -1)}${
        this.typeUpper
      }sArgs(ctx: ChainContext, ${this.type}: ${this.typeUpper}) {
            let e;
            switch (${this.type}.name) {
        ${filteredClasses
          .map((c) => {
            return `        case "${c.name}":
                    e = new ${c.className}(ctx, ${this.type});
                    ${c.getters
                      .filter((getter) => getter.startsWith("is"))
                      .map(
                        (getter) => `if (e.${getter}) {
                        // YOUR CODE HERE
                    }`
                      )
                      .join(" else ")}${c.getters.length > 0 ? " else " : ""}{
                        throw new UnknownVersionError(${this.type}.name);
                    }
        `;
          })
          .join("")}
                default:
                    throw new Unknown${this.typeUpper}Error(${this.type}.name);
            }
        }
        `;
      const outFileName = `${prefix.toLocaleLowerCase()}ts`;
      // Define the output file name and path
      const outputFilePath = path.join(outputFolderPath, outFileName);

      // Write the generated template to the output file
      fs.writeFileSync(outputFilePath, template);

      console.log(`Template written to file: ${outputFilePath}`);
    }
  }
}

const eventMappingGenerator = new MappingGenerator(
  "../types/events.ts",
  ["Balances.", "Staking.", "System.", "Contracts."],
  TransactionType.Event
);
eventMappingGenerator.generateMappings();

const callMappingGenerator = new MappingGenerator(
  "../types/calls.ts",
  ["Contracts."],
  TransactionType.Call
);
callMappingGenerator.generateMappings();
