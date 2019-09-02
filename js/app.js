
const mainHeader = document.querySelector('.main-header')
const Toggling = require('./utils/Toggling')
const Slide=require('./utils/Slide')
const Tabs=require('./utils/Tabs')
const Contact=require('./utils/Contact')
const togglings = new Toggling()
togglings.toggleTheme()
const slides = new Slide()
slides.openNav()
slides.closeNav()


const tab = new Tabs()
tab.openProject()
const contacts= new Contact()
contacts.submitContact()