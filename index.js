import button from "./components/button"
import form from "./components/form"
import popup from "./components/popup"
import shopCart from "./components/shopCart"
import azinput from "./components/input"
import azrow from "./components/row"
import dropDownMenu from "./components/dropDownMenu"
import azfold from "./components/fold"
import azdate from "./components/date"
import tool from "./components/tool"
import rate from "./components/rate"
import yzm from "./components/yzm"
import yzm3 from "./components/yzm3"
import yzm4 from "./components/yzm4"
import accordion from "./components/accordion/"
import azcomm from "./components/communication"
import azuploader from "./components/uploader"
import azcolorpicker from "./components/colorPicker"
import threeShuffing from './components/threeShuffing'
import tab from './components/tab'
import progressbar from './components/progressbar'
import table from './components/table'
import tablesecond from './components/tablesecond'
import animation from './components/animation'
import animationsecond from './components/animationsecond'
import theslider from './components/theslider'
import theslidersecond from './components/theslidersecond'
import animationthird from './components/animationthird'
import animationfourth from './components/animationfourth'
import animationfifth from './components/animationfifth'
import animationsixteen from './components/animationsixteen'
import animationsevteen from './components/animationsevteen'
import animationeighteen from './components/animationeighteen'
import animationnineteen from './components/animationnineteen'
import progressbarsecond from './components/progressbarsecond'
import progressbarthird from './components/progressbarthird'
import slideshow from "./components/slideshow"
import slideshow2 from "./components/slideshow2"
import slideshow3 from "./components/slideshow3"
import paging from "./components/paging"
import azthefrom from './components/theform'
import azprombox from './components/promptbox'
import azpromboxsend from './components/promptboxsecond'
import aznavigativg from './components/navigation'
import azbred from './components/breadcrumbs'
import api from "./components/api"

const DollUI = {};

DollUI.install = function (Vue, opts) {
  Vue.component(button.name,button),
  Vue.component(form.name,form),
  Vue.component(popup.name,popup),
  Vue.component(shopCart.name,shopCart),
  Vue.component(azinput.name,azinput),
  Vue.component(azrow.name,azrow),
  Vue.component(dropDownMenu.name,dropDownMenu),
  Vue.component(azfold.name,azfold),
  Vue.component(azdate.name,azdate),
  Vue.component(tool.name,tool),
  Vue.component(rate.name,rate),
  Vue.component(yzm.name,yzm),
  Vue.component(yzm3.name,yzm3),
  Vue.component(yzm4.name,yzm4),
  Vue.component(accordion.name,accordion),
  Vue.component(azcomm.name,azcomm),
  Vue.component(azuploader.name,azuploader),
  Vue.component(azcolorpicker.name,azcolorpicker),
  Vue.component(threeShuffing.name,threeShuffing),
  Vue.component(tab.name,tab),
  Vue.component(progressbar.name,progressbar),
  Vue.component(table.name,table),
  Vue.component(animation.name,animation),
  Vue.component(theslider.name,theslider),
  Vue.component(theslidersecond.name,theslidersecond),
  Vue.component(animationsecond.name,animationsecond),
  Vue.component(animationthird.name,animationthird),
  Vue.component(animationfourth.name,animationfourth),
  Vue.component(animationfifth.name,animationfifth),
  Vue.component(animationsixteen.name,animationsixteen),
  Vue.component(animationsevteen.name,animationsevteen),
  Vue.component(animationeighteen.name,animationeighteen),
  Vue.component(animationnineteen.name,animationnineteen),
  Vue.component(progressbarsecond.name,progressbarsecond),
  Vue.component(progressbarthird.name,progressbarthird),
  Vue.component(tablesecond.name,tablesecond),
  Vue.component(slideshow.name,slideshow),
  Vue.component(slideshow2.name,slideshow2),
  Vue.component(slideshow3.name,slideshow3),
  Vue.component(paging.name,paging)
  Vue.component(azthefrom.name,azthefrom)
  Vue.component(azprombox.name,azprombox)
  Vue.component(azpromboxsend.name,azpromboxsend)
  Vue.component(aznavigativg.name,aznavigativg)
  Vue.component(azbred.name,azbred)
  Vue.component(api.name,api)


};


export default DollUI
