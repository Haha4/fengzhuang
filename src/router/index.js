import { createMemoryHistory, createRouter } from 'vue-router'

import Login from '../pages/login/index.vue'

const routes = [
    { path: '/',  component: Login },
    { path: '/login', component: Login },
]

 const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
export   {router}
