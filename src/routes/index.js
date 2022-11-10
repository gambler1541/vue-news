import { createRouter, createWebHistory  }from 'vue-router'
import AskView from '../views/AskView.vue'
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
// import createListView from '../views/CreateListView'

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
            // component: createListView('NewsView'), 
            component: NewsView,
        },
        {
            path:'/jobs',
            name:'jobs',
            // component: createListView('JobsView'),
            component: JobsView,
        },
        {
            path:'/ask',
            name:'ask',
            // component: createListView('AskView'),
            component: AskView,
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
