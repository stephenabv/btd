import { createRouter, createWebHistory } from "vue-router";
import IndexVue from './src/views/Index.vue'
import ProductVue from './src/views/Product.vue'
import AppointmentVue from "@/views/Appointment.vue";
import AboutVue from '@/views/About.vue'
import ContactVue from '@/views/Contact.vue'
import ShopVue from "@/views/Shop.vue";

const routes = [
    {
        path: '/',
        name: 'Bohol Tech Doctor',
        component: IndexVue,
    },
    {
        path: '/services',
        name: 'Products and Services',
        component: ProductVue
    },
    {
        path: '/appointment',
        name: 'Appointment',
        component: AppointmentVue,
    },
    {
        path: '/about',
        name: 'About - Bohol Tech Doctor',
        component: AboutVue,
    },
    {
        path: '/contact',
        name: 'Contact Us - Bohol Tech Doctor',
        component: ContactVue
    },
    {
        path: '/shop',
        name: 'Shop - Bohol Tech Doctor',
        component: ShopVue
    },
    {
        path: '/cctv-installation',
        name: 'CCTV Installation - Bohol Tech Doctor',
        component: () => import('@/views/CCTV.vue')
    },
    { path: '/internet-connection', name: 'Internet Connection - Bohol Tech Doctor', component: () => import('@/views/InternetCon.vue') },
    { path: '/structured-cable', name: 'Structured Cabling - Bohol Tech Doctor', component: () => import('@/views/StructuredCable.vue') },
    { path: '/home-auto', name: 'Home Automation - Bohol Tech Doctor', component: () => import('@/views/HomeAuto.vue') },
    { path: '/web-development', name: 'Website Development - Bohol Tech Doctor', component: () => import('@/views/WebDev.vue') },
    { path: '/t-shirt', name: 'T-Shirt Printing - Bohol Tech Doctor', component: () => import('@/views/TShirt.vue') },
    { path: '/checkout', name: 'Checkout - Bohol Tech Doctor', component: () => import('@/components/CheckOut.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router