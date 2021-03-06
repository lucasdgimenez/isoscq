import Vue from "vue";
import Router from "vue-router";
import Login from "@/views/Login";
import Recover from "@/views/Recover";
import NewPassword from "@/views/NewPassword"
import Dashboard from "@/views/Dashboard"
import Cadastro from "@/views/Cadastro"
import ControleProcessoProduto from "@/views/ControleProcessoProduto"
import GestaoRisco from "@/views/GestaoRisco"
import DashboardMain from "@/views/DashboardMain"
import Chapa from "@/views/ControleProcessoProduto/Chapa"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            component: Login
        },
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
        },
        {
            path: "/cadastro",
            component: Cadastro
        },
        {
            path: "/dashboard",
            component: Dashboard,
            props: true,
            children: [
                {
                    path: '/',
                    component: DashboardMain,    
                },
                {
                    path: '/controleprocessoproduto',
                    component: ControleProcessoProduto
                },
                {
                    path: "/controleprocessoproduto/chapa",
                    component: Chapa
                },
                {
                    path: "/gestaoderiscos",
                    component: GestaoRisco,
                }
            ]
        },
        
       
        
    ]
})
    
