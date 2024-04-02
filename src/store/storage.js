import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    state() {
        return {
            payment : '',
            userVo : {
                no : "",
                point : "",
                hp : ""
            },
            savePoint : ""
        };  
    },
    mutations: {
        setPay(state,payload){
            state.payment = payload;
        },
        setUserVo(state,payload){
            state.userVo = payload;
        },
        setSavePoint(state,payload){
            state.savePoint = payload;
        }
        
    },
    plugins: [
        createPersistedState({
            paths: ['userVo', 'savePoint', 'payment']
        })
    ]
});