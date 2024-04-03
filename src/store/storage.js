import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    state() {
        return {
            cartList : "",
            payMethod : '',
            userVo : {
                no : "",
                point : "",
                hp : ""
            },
            savePoint : ""
        };  
    },
    mutations: {
        setCartList(state,payload){
            state.cartList = payload;
        },
        setPay(state,payload){
            state.payMethod = payload;
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
            paths: ['cartList','payMethod', 'userVo', 'savePoint']
        })
    ]
});