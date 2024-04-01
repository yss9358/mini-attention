import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    state() {
        return {
            authUser : null,
            token : null,
            payType : ""
        };  
    },
    mutations: {
        setPayType(state,payload){
            state.payType = payload;
        }
    },
    plugins: [
        createPersistedState({
            paths: ['authUser', 'token', 'payType']
        })
    ]
});