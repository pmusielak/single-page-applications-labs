const { createRouter, createWebHashHistory, createWebHistory } = require("vue-router")
import { PeopleListComponent} from '../components/PeopleListComponent.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: PeopleListComponent
        }
    ]
})