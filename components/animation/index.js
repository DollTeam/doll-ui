import DlAnimation from "./src/DlAnimation"

DlAnimation.install = function (Vue,opts) {
  Vue.component(DlAnimation.name,DlAnimation)
}

export default DlAnimation

