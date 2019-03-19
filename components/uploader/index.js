import DlUploader from "./src/DlUploader"

DlUploader.install = function (Vue,opts) {
  Vue.component(DlUploader.name,DlUploader)
}

export default DlUploader
