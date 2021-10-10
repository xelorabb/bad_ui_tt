import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels
} from '@headlessui/vue'

import {
  faPhone,
  faUser,
  faVolumeUp
} from '@fortawesome/free-solid-svg-icons'

library.add(faPhone)
library.add(faUser)
library.add(faVolumeUp)

createApp(App)
  .component('fa', FontAwesomeIcon)
  .component('Tab', Tab)
  .component('TabList', TabList)
  .component('TabGroup', TabGroup)
  .component('TabPanel', TabPanel)
  .component('TabPanels', TabPanels)
  .mount('#app')
