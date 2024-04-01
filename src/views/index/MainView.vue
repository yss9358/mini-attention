<template>
<div class="wrap">
    <div class="mainViewContainer">
        <div class="managerMenu">
            <img class="managerBtn" src="../../assets/images/managerIcon.png" v-on:click="manageBtn">
        </div>
        
        <div class="mainBtn">   
            <button type="button" v-on:click="inCafe">매장</button>
            <button type="button" v-on:click="outCafe">포장</button>
        </div>
    </div>
</div>
</template>


<script>
import '@/assets/css/attention.css'
import '@/assets/css/main.css'

export default{
    name : 'MainView',
    components : {},
    data() {
        return {
            where : '' // 매장, 포장 버튼 클릭시 보낼 데이터
        };
    },
    methods : {
        // 매장버튼 클릭했을 때 
        inCafe(){
            this.where = '1';
            console.log(this.where);
            // 데이터 1 넘기고 페이지 이동
            // this.$router.push({
            //     path : '/',
            //     query : {
            //         where : this.where
            //     }
            // });
            
        },
        
        // 포장버튼 클릭했을 때 
        outCafe(){
            this.where = '2';
            console.log(this.where);
            // this.$router.push({
            //     path : '/',
            //     query : {
            //         where : this.where
            //     }
            // });
            // 데이터 2넘기고 페이지 이동
        },

        // 매니저아이콘 클릭했을 때 
        manageBtn(){
            console.log("manageBtn");
            // 관리자 페이지로 이동 
            // this.$router.push('/');
        }

    },
    created (){

    }

}
</script>

<style>

</style>