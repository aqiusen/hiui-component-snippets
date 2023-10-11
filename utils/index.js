const vscode = require('vscode');
// 获取组件的地址
function getUrlPath(text) {
  const tempUrl = text.replace(/([A-Z])/g, "-$1").replace(/^-/, "").toLowerCase()
  switch(text) {
    case "Col":
    case "RowRow":
      return "https://xiaomi.github.io/hiui/components/grid/"
    default:
      return `https://xiaomi.github.io/hiui/components/${tempUrl}/`
  }
}

// 直接跳转到官网网页
function jumpToHtml(url) {
  if(!url) return ;
  debugger
  const editor = vscode.window.activeTextEditor;
  let selectText = ""
  editor.edit(builder => {
    editor.selections.forEach(selection => {
      const range = new vscode.Range(selection.start, selection.end)
      selectText = editor.document.getText(range) || ''
      debugger
      console.log(selectText)
    })
  })
  vscode.env.openExternal(getUrlPath(selectText))
}
module.exports.jumpToHtml = jumpToHtml