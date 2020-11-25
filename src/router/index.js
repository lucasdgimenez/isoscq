import Vue from "vue";
import Router from "vue-router";
import Login from "@/views/Login";
import Recover from "@/views/Recover";
import NewPassword from "@/views/NewPassword"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/login",
            component: Login
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
    