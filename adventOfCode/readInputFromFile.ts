const fs = require("fs");
const path = require("path");
const readLine = require("readline");

export const callWithInputReadFromFile = (callBack: Function) => {
  const filePath = path.join(__dirname, "..", "..", "input", "input.txt");
  const inputStream = readLine.createInterface({
    input: fs.createReadStream(filePath),
    output: process.stdout,
    terminal: false,
  });

  let arrayToBuild: string[] = [];

  inputStream.on("line", (line: string) => {
    arrayToBuild.push(line);
  });

  inputStream.on("close", () => {
    arrayToBuild = transformInput<string>(arrayToBuild, parseInt);
    console.log(callBack(arrayToBuild));
  });
};

export const transformInput = <T>(input: T[], callBack: Function) =>
  input.map((item: T) => callBack(item));
