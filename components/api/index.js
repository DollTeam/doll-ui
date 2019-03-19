import DlApi from './src/DlApi'

DlApi.install = function (Vue,opts) {
  Vue.component(DlApi.name,DlApi)
}

export default DlApi
