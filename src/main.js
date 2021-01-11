// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import VueQrcode from '@chenfengyuan/vue-qrcode';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import VueHtmlToPaper from "vue-html-to-paper";
import DefaultLayout from '~/layouts/Default.vue';



export default function (Vue, { router, head, isClient }) {
  const options = {
    name: "_blank",
    specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
  };
  Vue.use(Buefy);
  Vue.use(VueHtmlToPaper, options);
  Vue.component(VueQrcode.name, VueQrcode);
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.htmlAttrs = { lang: 'en' }
}
