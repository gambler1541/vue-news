import { createRouter, createWebHistory  }from 'vue-router'
import AskView from '../views/AskView.vue'
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'

export default createRouter({ 
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path:'/',
            redirect:'/news'
        },
        {
            // path: url
            path:'/news',
            name: 'news',
            // component: url 주소로 갔을 때 표시될 컴포넌트
            component: NewsView
        },
        {
            path:'/jobs',
            name:'jobs',
            component: JobsView
        },
        {
            path:'/ask',
            name:'ask',
            component: AskView
        },
        {
            path: '/user/:id',
            component: UserView
        },
        {
            path: '/item/:id',
            component: ItemView
        }        
    ]
})