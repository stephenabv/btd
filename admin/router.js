import { createRouter, createWebHistory } from "vue-router";
import LoginVue from "@/components/Login.vue"
import DashboardVue from "@/views/Dashboard.vue";
import ShopData from '@/views/ShopData.vue';
import ServicesData from '@/views/ServicesData.vue';
import ContactData from '@/views/ContactData.vue';

const routes = [
    { path: '/', name: 'Login', component: LoginVue },
    { path: '/dashboard', name: 'Dashboard', component: DashboardVue },
    { path: '/shopdata', name: 'Shop - Modify Contents', component: ShopData, },
    { path: '/servicesdata', name: 'Products and Services - Modify Contents', component: ServicesData },
    { path: '/contactformdata', name: 'Contact Us Form', component: ContactData },
    { path: '/appointmentdata', name: 'Appointment Form', component: () => import("@/views/AppointmentData.vue") },
    { path: '/internet', name: 'Internet - Modify Contents', component: () => import("@/views/InternetData.vue") },
    { path: '/cable', name: 'Structured Cabling - Modify Contents', component: () => import("@/views/CablingData.vue") },
    { path: '/homeauto', name: 'Home Automation - Modify Contents', component: () => import("@/views/HomeAuto.vue") },
    { path: '/webdev', name: 'Web Development - Modify Contents', component: () => import("@/views/WebDev.vue") },
    { path: '/t-shirt', name: 'T-Shirt Printing - Modify Contents', component: () => import("@/views/TshirtPrinting.vue") },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router