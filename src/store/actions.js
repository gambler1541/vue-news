import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemInfo, fetchList } from '../api/index'

export default {
    // promise
    // FETCH_NEWS({ commit }) {
    //     return fetchNewsList()
    //         .then(res => {
    //             commit('SET_NEWS', res.data);
    //             return res;
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         })
    // },

    // async
    async FETCH_NEWS({ commit }) {
        const response = await fetchNewsList();
        commit('SET_NEWS', response.data);
        return response;
    },

    // FETCH_JOBS({ commit }) {
    //     return fetchJobsList()
    //         .then(res => {
    //             commit('SET_JOBS', res.data);
    //             return res;
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         })
    // },
    async FETCH_JOBS({ commit }){
        const response = await fetchJobsList();
        commit('SET_JOBS', response.data);
        return response;
    },

    // FETCH_ASK({ commit }) {
    //     return fetchAskList()
    //         .then(res => {
    //             commit('SET_ASK', res.data);
    //             return res;
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         })
    // },
    async FETCH_ASK({ commit }){
        const response = await fetchAskList();
        commit('SET_ASK', response.data);
        return response;
    },

    FETCH_USER({ commit }, name){
        return fetchUserInfo(name)
            .then(res => {
                commit('SET_USER', res.data);
            })
            .catch(e => {
                console.log(e);
            })
    },
    FETCH_ITEM({ commit }, id){
        return fetchItemInfo(id)
            .then(res => {
                commit('SET_ITEM', res.data);
            })
            .catch(e =>{
                console.log(e);
            })
    },
    // FETCH_LIST({ commit }, pageName) {
    //     return fetchList(pageName)
    //         .then( ({data}) => {
    //             commit('SET_LIST', data);
    //             return data;
    //         })
    //         .catch(e => console.log(e))
    // },
    async FETCH_LIST({ commit }, pageName){
        try {
            const response = await fetchList(pageName);
            commit('SET_LIST', response.data);
            return response;            
        } catch (error) {
            console.log(error);
        }
    }
}