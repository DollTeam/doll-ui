import DlCommunication from "./src/DlCommunication"

DlCommunication.install = function (Vue,opts) {
  Vue.component(DlCommunication.name,DlCommunication)
}

export default DlCommunication
