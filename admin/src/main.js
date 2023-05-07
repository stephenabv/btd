import { createApp } from 'vue'
import App from './App.vue'
import router from '../router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/vue-fontawesome'
import '@fortawesome/free-solid-svg-icons'


const isAuthenticated = () => {
    // Check if the user is authenticated
    // Return true if the user is authenticated, false otherwise
    return sessionStorage.getItem('isLoggedIn') === 'true';
};

router.beforeEach((to, from, next) => {
    if (to.name === 'Dashboard' && !isAuthenticated()) {
        // If the user is not authenticated and is trying to access the Dashboard,
        // redirect the user to the Login page
        next({ name: 'Login' });
    } else {
        // Otherwise, allow the user to proceed to the requested page
        next();
    }
});


createApp(App).use(router).mount('#app')
