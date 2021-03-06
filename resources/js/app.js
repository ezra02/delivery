/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;
 
import Vue from "vue";
 
import Toaster from 'v-toaster'
 
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-toaster/dist/v-toaster.css'
 
// optional set default imeout, the default is 10000 (10 seconds).
Vue.use(Toaster, {timeout: 5000})
import VueChatScroll from "vue-chat-scroll";
Vue.use(VueChatScroll);
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('navigation-component', require('./components/navigation.vue').default);
Vue.component('notification-component', require('./components/notification.vue').default);
Vue.component('home-component', require('./components/home.vue').default);
Vue.component('likedproducts-component', require('./components/likedproducts.vue').default);

Vue.component('cart-component', require('./components/cart/cart.vue').default);
Vue.component('addtocart-component', require('./components/cart/addToCart.vue').default);
Vue.component('removefromcart-component', require('./components/cart/removeFromCart.vue').default);

Vue.component('showproduct-component', require('./components/product/show.vue').default);
Vue.component('likeproduct-component', require('./components/product/like.vue').default);
Vue.component('comment-component', require('./components/product/comment.vue').default);
Vue.component('rate-component', require('./components/product/rate.vue').default);

Vue.component('chat-component', require('./components/chat/chat.vue').default);
Vue.component('friends-component', require('./components/chat/friends.vue').default);
Vue.component('message-component', require('./components/chat/message.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
