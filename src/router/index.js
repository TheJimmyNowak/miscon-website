import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import About from "@/views/About";
import Membership from "@/views/Membership";
import Documents from "@/views/Documents";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about/',
        name: 'About',
        component: About
    },
    {
        path: '/membership/',
        name: 'Membership',
        component: Membership

    },
    {
        path: '/documents/',
        name: 'Documents',
        component: Documents

    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})

export default router
