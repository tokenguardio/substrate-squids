// @ts-nocheck

const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const fileName = path.resolve(__dirname, "../types/events.ts");
const sourceCode = fs.readFileSync(fileName).toString();
const sourceFile = ts.createSourceFile(
  fileName,
  sourceCode,
  ts.ScriptTarget.ESNext,
  /* setParentNodes */ true,
  ts.ScriptKind.TS
);

interface ClassInfo {
  className: string;
  eventName: string;
  numGetters: number;
  getters: string[];
}

const classInfoList: ClassInfo[] = [];

// Find all the class declarations that match the expected format
const classes = sourceFile.statements.filter(
  (node) =>
    ts.isClassDeclaration(node) &&
    node.members.some((m) => ts.isConstructorDeclaration(m))
);

// Extract the assert function call and its argument for each matching class
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
          arg.operatorToken.kind === ts.SyntaxKind.EqualsEqualsEqualsToken &&
          ts.isPropertyAccessExpression(arg.left) &&
          arg.left.expression.getText(sourceFile) === "event" &&
          arg.left.name.getText(sourceFile) === "name" &&
          ts.isStringLiteral(arg.right)
        ) {
          const eventName = arg.right.text;

          // Count the number of getters in the class
          const numGetters = cls.members.filter((node) =>
            ts.isGetAccessorDeclaration(node)
          ).length;

          const getters = cls.members
            .filter((m) => ts.isGetAccessorDeclaration(m))
            //@ts-ignore
            .map((m) => m.name.getText(sourceFile));

          // Save the information in a dictionary-like object
          classInfoList.push({
            className: className ?? "",
            eventName: eventName,
            numGetters: numGetters,
            getters: getters,
          });
        }
      }
    }
  }
}

// Filter classes with more than 2 getters and create a new array
const classesWithMoreThanTwoGetters = classInfoList.filter(
  (classInfo) => classInfo.numGetters > 2
);

console.log(classInfoList);
console.log(classesWithMoreThanTwoGetters);

console.log(`Number of all classes: ${classInfoList.length}`);
console.log(
  `Number of classes with more than two getters: ${classesWithMoreThanTwoGetters.length}`
);

const template = `import {
    ${classesWithMoreThanTwoGetters
      .map((c) => `  ${c.className},\n`)
      .join("")}} from "../types/events";
    import { ChainContext, Event } from "../types/support";
    
    export function normalizeEventArgs(ctx: ChainContext, event: Event) {
        let e;
        switch (event.name) {
    ${classesWithMoreThanTwoGetters
      .map((c) => {
        return `        case "${c.eventName}":
                e = new ${c.className}(ctx, event);
                ${c.getters
                  .filter((getter) => getter.startsWith("is"))
                  .map(
                    (getter) => `if (e.${getter}) {
                    // YOUR CODE HERE
                }`
                  )
                  .join(" else ")}${c.getters.length > 0 ? " else " : ""}{
                    throw new UknownVersionError();
                }
    `;
      })
      .join("")}
            default:
                return event.args;
        }
    }
    
    function bufferToHex(buffer: Uint8Array) {
      const hexString =
        "0x" +
        Array.from(buffer, (byte) => {
          return ("0" + byte.toString(16)).slice(-2);
        }).join("");
      return hexString;
    }
    
    class UknownVersionError extends Error {
      constructor() {
        super("Uknown version");
      }
    }
    `;

console.log(template);
