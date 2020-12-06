const fs = require("fs");
const path = require("path");
const readLine = require("readline");

const FILE_PATH = path.join(__dirname, "..", "..", "input", "input.txt");

export const callWithInputReadFromFile = <T>(
  callBack: Function,
  transformer: Function
): void => {
  const inputStream = readLine.createInterface({
    input: fs.createReadStream(FILE_PATH),
    output: process.stdout,
    terminal: false,
  });

  let builtFromFile: any[] = [];

  inputStream.on("line", (line: string) => {
    builtFromFile.push(line);
  });

  inputStream.on("close", () => {
    builtFromFile = transformInput<T>(builtFromFile, transformer);
    console.log(callBack(builtFromFile));
  });
};

export const transformInput = <T>(input: T[], callBack: Function) =>
  input.map((item: T) => callBack(item));
