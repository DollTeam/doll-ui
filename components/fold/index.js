import DlFold from "./src/DlFold"

DlFold.install = function (Vue,opts) {
  Vue.component(DlFold.name,DlFold)
}

export default DlFold
