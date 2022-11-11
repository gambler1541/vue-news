import { createRouter, createWebHistory  }from 'vue-router'
import AskView from '../views/AskView.vue'
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
// import createListView from '../views/CreateListView'
import bus from '../utils/eventbus'
import store from '../store/index';


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
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        // bus.$emit('end:spinner');
                        next();
                    })
                    .catch(e => {
                        console.log(e);
                    })

            }
        },
        {
            path:'/jobs',
            name:'jobs',
            // component: createListView('JobsView'),
            component: JobsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        bus.$emit('end:spinner');
                        next();
                    })
                    .catch(e => {
                        console.log(e);
                    })
            }
        },
        {
            path:'/ask',
            name:'ask',
            // component: createListView('AskView'),
            component: AskView,
            beforeEnter: (to, from , next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        // bus.$emit('end:spinner');
                        next();
                    })
                    .catch(e => {
                        console.log(e);
                    })
            }
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
