import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/pages/Home.vue";
import Login from "../components/pages/Login.vue";
import Register from "../components/pages/Register.vue";

const routes = [
    { path: "/", name: "Home", component: Home, meta: { title: "Home" } },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { title: "Login" },
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: { title: "Register" },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.name;
    next();
});

export default router;
