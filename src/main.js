import Vue from "vue";
import App from "./App.vue";
import vjdesign from "../packages";
import ElementUI from "element-ui";
import "./editor/element";
import "bootstrap/dist/css/bootstrap-grid.css";

Vue.config.productionTip = false;

Vue.use(vjdesign);
Vue.use(ElementUI);

new Vue({
  render: h => h(App)
}).$mount("#app");
