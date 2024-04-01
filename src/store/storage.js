import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    state() {
        return {
            authUser : null,
            token : null,
            payMethod : "",
            place : "",
            point : ""
        };  
    },
    mutations: {
        setPay(state,payload){
            state.payMethod = payload;
        },
        setPlace(state,payload){
            state.place = payload;
        },
        setPoint(state,point){
            state.point = point
        }
        
    },
    plugins: [
        createPersistedState({
            paths: ['authUser', 'token', 'payMethod']
        })
    ]
});