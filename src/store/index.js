import Vuex from 'vuex'
import actions from './actions';
import mutations from './mutations';

const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        ask: [],
        user: {},
        item: {},
    },
    getters: {
        fetchedAsk(state){
            return state.ask;
        },

        fetchedItem(state){
            return state.item;
        },
    },
    mutations,
    actions
})

export default store ;