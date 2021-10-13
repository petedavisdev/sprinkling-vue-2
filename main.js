/* TODO 2: import vue from CDN */
import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js";
// TODO 6: import component objects
import { clickCounter } from "./components/clickCounter.js";
import { helloWorld } from "./components/helloWorld.js";

/* TODO 7: register vue components */
Vue.component("ClickCounter", clickCounter);
Vue.component("HelloWorld", helloWorld);

/* TODO 3: create vue instances */
const vueApps = document.querySelectorAll("[data-vue]");

vueApps.forEach((app) => {
    const appData = JSON.parse(app.dataset.vue || "{}");

    new Vue({
        el: app,
        data: appData,
    });
});
