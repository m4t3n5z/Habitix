import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue"
import Dashboard from "../components/Dashboard.vue"
import Profile from "../views/Profile.vue"
import Habitix from "../views/Habitix.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"

Vue.use(VueRouter);
const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
    },
    {
        path: "/habitix",
        name: "Habitix",
        component: Habitix,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/Register",
        name: "Register",
        component: Register
    } 
];


const router = new VueRouter({
    routes
  });
  
  export default router;
  