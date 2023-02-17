import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import router from "./router";

import "./axios";
import "./style.css";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import { faTrash, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTrash, faPlusSquare);

const pinia = createPinia();

pinia.use(({ store }) => {
    store.router = markRaw(router);
});

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(pinia);
app.use(router);

app.mount("#app");
