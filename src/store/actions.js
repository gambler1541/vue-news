import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemInfo } from '../api/index'

export default {
    FETCH_NEWS({ commit }) {
        fetchNewsList()
            .then(res => {
                commit('SET_NEWS', res.data);
                return res;
            })
            .catch(e => {
                console.log(e);
            })
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(res => {
                commit('SET_JOBS', res.data);
                return res;
            })
            .catch(e => {
                console.log(e);
            })
    },
    FETCH_ASK({ commit }) {
        fetchAskList()
            .then(res => {
                commit('SET_ASK', res.data);
                return res;
            })
            .catch(e => {
                console.log(e);
            })
    },
    FETCH_USER({ commit }, name){
        fetchUserInfo(name)
            .then(res => {
                commit('SET_USER', res.data);
            })
            .catch(e => {
                console.log(e);
            })
    },
    FETCH_ITEM({ commit }, id){
        fetchItemInfo(id)
            .then(res => {
                commit('SET_ITEM', res.data);
            })
            .catch(e =>{
                console.log(e);
            })
    }
}