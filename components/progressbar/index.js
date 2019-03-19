import DlProgressBar from "./src/DlProgressBar"

DlProgressBar.install = function (Vue,opts) {
  Vue.component(DlProgressBar.name,DlProgressBar)
}

export default DlProgressBar

