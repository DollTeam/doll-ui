import DlShopCart from "./src/DlShopCart"

DlShopCart.install = function (Vue,opts) {
  Vue.component(DlShopCart.name,DlShopCart)
}

export default DlShopCart
