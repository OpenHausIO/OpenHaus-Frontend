import Blank from "./pages/blank.vue";
import Login from "./pages/login.vue";


import UserView from "./user-view.vue";

import Home from "./pages/home.vue";
import Room from "./pages/rooms.vue";
import Scene from "./pages/scenes.vue";
import Endpoint from "./pages/endpoints.vue";

export default [{
    path: "/login",
    component: Login
},
{
    path: '/home',
    component: UserView,
    children: [
        {
            path: "",
            component: Home
        }
    ]

},
{
    path: '/rooms',
    component: UserView,
    children: [
        {
            path: "",
            component: Room
        },
        {
            path: ':_id',
            component: Blank,
            props: true
        },
        {
            path: ':_id/:endpoint',
            component: Blank,
            props: true
        }
    ]

},
{
    path: '/scenes',
    component: UserView,
    children: [
        {
            path: "",
            component: Scene
        },
        {
            path: ":_id",
            component: Scene,
            props: true
        }
    ]

},
{
    path: '/endpoints',
    component: UserView,
    children: [
        {
            path: "",
            component: Endpoint
        },
        {
            path: ":_id",
            component: Endpoint,
            props: true
        }
    ]

},
{
    path: '/dashboard',
    component: Blank
},
{
    path: "*",
    redirect: "/login"
}];

