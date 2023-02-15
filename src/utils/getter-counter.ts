const ts = require("typescript");

const fileName = "../types/events.ts";

// Parse the file with the TypeScript Compiler API
const sourceFile = ts.createSourceFile(
  fileName,
  ts.sys.readFile(fileName) || "",
  ts.ScriptTarget.Latest
);

// Find all classes in the file
const classes = sourceFile.statements.filter(ts.isClassDeclaration);

let changedformatCount = 0;
// For each class, count the number of getter methods
for (const cls of classes) {
  const getters = cls.members.filter(ts.isGetAccessor);
  if (getters.length > 2) {
    changedformatCount++;
    console.log(`Class "${cls.name?.text}" has ${getters.length} getters`);
  }
}
console.log(`Total: ${classes.length}`);
console.log(`More than two: ${changedformatCount}`);
