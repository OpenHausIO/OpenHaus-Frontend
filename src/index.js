// https://medium.com/js-dojo/how-to-configure-webpack-4-with-vuejs-a-complete-guide-209e943c4772
// https://dev.to/macmacky/how-to-configure-webpack-and-vue-from-the-ground-up-4c19
// https://itnext.io/vuejs-and-webpack-4-from-scratch-part-1-94c9c28a534a

import "bootstrap";
import "./scss/app.scss";

// fontawesome
import '@fortawesome/fontawesome-free/js/fontawesome';
//import "@fortawesome/fontawesome-free/webfonts/fontawesome";
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'


// vue main
import Vue from 'vue';


// vue routing
import VueRouter from "vue-router";
import routes from "./routes.js";

import Navigation from "./components/navigation.vue";


Vue.use(VueRouter);

//Vue.component("user-view", import UserView from "./user-view.vue";)
Vue.component("navigation", Navigation);


// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes // short for `routes: routes`
});


router.beforeEach((to, from, next) => {



    console.log("from %s to %s", from, to)

    next();

});


// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
    router
});


app.$mount("#app");


/*

    - fullheight landing page for cloud
    - cloud/standalone pages/templates

    https://stackoverflow.com/questions/25731796/how-to-create-a-full-screen-div-on-landing-page/25731919
https://stackoverflow.com/questions/25731796/how-to-create-a-full-screen-div-on-landing-page/25731919


*/

/*
new Vue({
    data: {
        hi: "USer"
    },
    
});

const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})
*/



console.log("Hello WebPack Fuck");


function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}




const displayName = () => {

    let fullscreen = false;

    console.log('Test');

    const button = document.createElement('button');
    button.textContent = 'Click me';

    button.onclick = function () {

        console.log("buttonclicked")

        let e = document.getElementById("app");



        if (fullscreen) {
            console.log("Exit fullscreen");
            exitFullscreen(e);
        } else {
            console.log("enter fullscreen");
            enterFullscreen(e);
        }

        fullscreen != fullscreen;



    };

    document.body.appendChild(button)

};

//displayName();