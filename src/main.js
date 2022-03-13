import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import getWeb3 from "./getWeb3.js";

import 'bootstrap/dist/css/bootstrap.css'
import * as serviceWorker from './serviceWorker'

const Web3 = require('web3')
window.web3 = new Web3(window.ethereum)
window.web3.setProvider('ws://localhost:8545')
const app = createApp(App)
app.use(router)
// app.use(getWeb3)
app.config.globalProperties.window = window
app.config.globalProperties.window.web3 = window.web3
app.mount('#app')

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
