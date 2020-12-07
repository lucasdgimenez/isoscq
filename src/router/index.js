import Vue from "vue";
import Router from "vue-router";
import Login from "@/views/Login";
import Recover from "@/views/Recover";
import NewPassword from "@/views/NewPassword"
import Dashboard from "@/views/Dashboard"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/login",
            component: Login
        },
        {
            path: "/dashboard",
            component: Dashboard
        },
        {
            path: "/recuperarsenha",
            component: Recover
        },
        {
            path: "/newpassword",
            component: NewPassword
        }
    ]
})
    