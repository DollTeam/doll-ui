import DlTool from "./src/DlTool"

DlTool.install = function (Vue,opts) {
  Vue.component(DlTool.name,DlTool)
}

export default DlTool
