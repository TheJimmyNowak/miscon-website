import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import About from "@/views/About";
import Documents from "@/views/Documents";
import Partners from "@/views/Partners";
import Contact from "@/views/Contact";

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
        path: '/documents/',
        name: 'Documents',
        component: Documents

    },
    {
        path: '/partners/',
        name: 'Partners',
        component: Partners
    },
    {
        path: '/contact/',
        name: 'Contact',
        component: Contact
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})

export default router
