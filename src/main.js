import Vue from "vue";
import App from "./App.vue";
import moment from "moment";
moment.locale("it");
Vue.prototype.moment = moment;

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faHouse,
  faHeart as fasHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as farHeart,
  faComment,
} from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(faHouse, farHeart, fasHeart, faComment);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
