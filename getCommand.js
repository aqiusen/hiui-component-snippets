/**
 * 生产提示命令，和导包命令的脚本，不用手动一个一个写
 */
var fs = require("fs");
const readline = require("readline");
let fileData = ""
// 使用readline按行读取文件
const readLine = readline.createInterface({
  input: fs.createReadStream(".code-snippets"), // 指定文件路径
  crlfDelay: Infinity,
});
readLine.on("line", (line) => {
  if (!line.includes("//")) {
    fileData += line;
  }
})
readLine.on("close", () => {
  const data = JSON.parse(fileData)
  const keys = Object.keys(data);
  const importKeys = [];
  const snippets = []
  for (let i = 0; i < Object.keys(data).length; i++) {
    const element = data[keys[i]].prefix;
    if (element.includes("-import")) {
      importKeys.push(element);
    } else {
      snippets.push(element)
    }
  }
  console.log(importKeys);
  console.log(snippets);
})
