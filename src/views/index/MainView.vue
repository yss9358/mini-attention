<template>
<div class="wrap">
    <div class="mainViewContainer">
        <div class="managerMenu">
            <img class="managerBtn" src="../../assets/images/managerIcon.png" v-on:click="manageBtn">
        </div>
        
        <div class="mainBtn">   
            <button type="button" v-on:click="inStore">매장</button>
            <button type="button" v-on:click="takeOut">포장</button>
        </div>
    </div>
</div>
</template>


<script>
import '@/assets/css/attention.css'
import '@/assets/css/main.css'

export default{
    name : 'MainView',
    components : {
        
    },
    data() {
        return {
            where : '' // 매장, 포장 버튼 클릭시 보낼 데이터
        };
    },
    methods : {
        inStore(){
            this.$store.commit('setPlace','매장');
            this.$router.push('/');
        },
        takeOut(){
            this.$store.commit('setPlace','포장');
            this.$router.push('/');
        },

        // 매니저아이콘 클릭했을 때 
        manageBtn(){
            console.log("manageBtn");
            // 관리자 페이지로 이동 
            // this.$router.push('/');
        }

    },
    created (){
        this.$store.commit('setPlace',null);
        this.$store.commit('setPay', null);
    }

}
</script>

<style>

</style>