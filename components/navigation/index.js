import DlNavigation from "./src/DlNavigation"

DlNavigation.install = function (Vue,opts) {
  Vue.component(DlNavigation.name,DlNavigation)
}

export default DlNavigation

