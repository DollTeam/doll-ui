import DlDate from "./src/DlDate"

DlDate.install = function (Vue,opts) {
  Vue.component(DlDate.name,DlDate)
}

export default DlDate
