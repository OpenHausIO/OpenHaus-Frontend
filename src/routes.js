import Blank from "./pages/blank.vue";
import Login from "./pages/login.vue";
import Home from "./pages/home.vue";

import UserView from "./user-view.vue";

export default [{
    path: "/login",
    component: Login
},
{
    path: '/home',
    component: Home
},
{
    path: '/rooms',
    component: UserView,
    children: [
        {
            path: "",
            component: Blank
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
    component: Blank
},
{
    path: '/lights',
    component: Blank
},
{
    path: '/endpoints',
    component: UserView,
    children: [
        {
            path: "",
            component: Blank
        },
        {
            path: ":_id",
            component: Blank,
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

