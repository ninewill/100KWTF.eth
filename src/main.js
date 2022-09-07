import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';

library.add(faAlignJustify)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount("#app");
