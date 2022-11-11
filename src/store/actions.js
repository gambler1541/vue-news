import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemInfo, fetchList } from '../api/index'

export default {
    FETCH_NEWS({ commit }) {
        return fetchNewsList()
            .then(res => {
                commit('SET_NEWS', res.data);
                return res;
            })
            .catch(e => {
                console.log(e);
            })
    },
    FETCH_JOBS({ commit }) {
        return fetchJobsList()
            .then(res => {
                commit('SET_JOBS', res.data);
                return res;
            })
            .catch(e => {
                console.log(e);
            })
    },
    FETCH_ASK({ commit }) {
        return fetchAskList()
            .then(res => {
                commit('SET_ASK', res.data);
                return res;
            })
            .catch(e => {
                console.log(e);
            })
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
    FETCH_LIST({ commit }, pageName) {
        return fetchList(pageName)
            .then( ({data}) => {
                commit('SET_LIST', data);
                return data;
            })
            .catch(e => console.log(e))
    },
}