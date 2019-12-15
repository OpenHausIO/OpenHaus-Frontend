
const isAuthenticated = (to, from, next) => {
  if (window.localStorage.getItem("token")) {

    // user is authenticated
    // continue routing
    next();

  } else {


    next({
      path: "/auth/login"
    });

  }
};


const AUTH = [{
  path: "/auth",
  component: () => import("layouts/auth.vue"),
  children: [{
    path: "login",
    component: () => import("pages/auth.login.vue")
  }, {
    path: "logout",
    component: () => import("pages/auth.logout.vue")
  }, {
    path: "reset",
    component: () => import("pages/auth.reset.vue")
  }]
}];


const MAIN = [{
  path: "/",
  component: () => import("layouts/main.vue"),
  beforeEnter: isAuthenticated,
  children: [{
    path: "",
    component: () => import("pages/main.home.vue")
  }, {
    path: "/home",
    component: () => import("pages/main.home.vue")
  }, {
    path: "/rooms",
    component: () => import("pages/main.rooms.vue")
  }, {
    path: "/devices",
    component: () => import("pages/blank.vue")
  }, {
    path: "/scenes",
    component: () => import("pages/blank.vue")
  }]
}];


const ADMIN = [{
  path: "/admin",
  component: () => import("layouts/admin.vue"),
  beforeEnter: isAuthenticated,
  children: [{
    path: "",
    component: () => import("pages/admin.home.vue")
  }]
}];



const routes = [].concat(AUTH, MAIN, ADMIN);

console.log("test routing");

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/404.vue")
  })
}

export default routes
