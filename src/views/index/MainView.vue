<template>

<div class="wrap">
    <div class="mainViewContainer">

        <div class="managerMenu">
            <img class="managerBtn" src="../../assets/images/managerIcon.png" v-on:click="manageBtn">
        </div>
        <!-- mangerMenu -->

        <div class="mainBtn">   
            <button type="button" v-on:click="inStore">매장</button>
            <button type="button" v-on:click="takeOut">포장</button>
        </div>
        <!-- mainBtn -->

    </div>
    <!-- mainViewContainer -->

</div>
<!-- wrap -->

</template>


<script>
import '@/assets/css/attention.css'
import '@/assets/css/mainpage.css'

export default{
    name : 'MainView',
    components : {
        
    },
    data() {
        return {
            
        };
    },
    methods : {
        // 장바구니로 가는 패스 메소드
        goMenu(){
            // 장바구니로 가는 path 필요
            // path 구하면 아래 두개 삭제하고 이 메소드로 변경
            // this.$router.push('');
        },

        inStore(){
            this.$router.push('/pays/card');
        },
        takeOut(){
            this.$router.push('/pays/card');
        },


        // 매니저아이콘 클릭했을 때 
        manageBtn(){
            console.log("manageBtn");
            // 관리자 페이지로 이동 
            // this.$router.push('/');
        }

    },
    created (){
        this.$store.commit('setUserVo', null);
        this.$store.commit('setPay', null);
        // this.$store.commit('',null); 필요하면 데이터 리셋용 
        // this.$store.commit('',null); 필요하면 데이터 리셋용 
        // this.$store.commit('',null); 필요하면 데이터 리셋용 
    }

}
</script>

<style>

</style>