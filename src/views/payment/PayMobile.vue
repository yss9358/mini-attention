<template>

<div class="wrap">
    <div class="card-container">
        
        <AppPayHeader/>
        <!-- 로고부분 -->

        <div class="card-box">
            <img class="mobileCoupon" src="../../assets/images/pay1.png" v-on:click="goResult"><br>
            <div class="text-mobile">
                
                <div class="timer">
                    <span class="big">{{ timeCounter }}</span>초 후 주문이 취소됩니다.<br>
                    <!-- 시간초가 지나갈동안 결제가 안되면 메인으로 돌아감 -->
                    <!-- 결제가 완료되면 payresult로 감 -->
                </div>
                <!-- timer --> 

                <div>
                    {{ payMessage }}
                </div>
                <!-- payMessage -->

                <router-link to="/main" class="cancelBtn">뒤로 가기</router-link>
                <router-link to="/main" class="cancelBtn">주문 취소</router-link>

            </div>
            <!-- text-mobile -->

        </div>
        <!-- card-box -->

    </div>
    <!-- card-container -->

</div>
<!-- wrap -->    

</template>

<script>
import '@/assets/css/attention.css';
import '@/assets/css/payend.css';
import AppPayHeader from '@/components/AppPayHeader.vue'

export default{
    name : 'PayCard',
    components : {
        AppPayHeader
    },
    data(){
        return {
            timeCounter : 30, // 타이머 시간초
            resTimeData : '', // 남은시간 표기 
            payMessage : '모바일 쿠폰을 가까이 대주세요' // 안내 메세지 
        };
    },
    methods : {
        // 결제 페이지 이동
        goResult(){
            this.$router.push('/pays/result');
        },/// 결제 페이지 이동 ////


        /////////////////////////// 타이머 //////////////////////////////////
        // 타이머 data에 timeCounter : 초 , restTimeData : "" 작성
        start(){
			// 1초에 한번씩 start 호출
			this.polling = setInterval( () =>{
			this.timeCounter-- ;//1씩 감소
			this.resTimeData = this.prettyTime();
			if (this.timeCounter <= 0) this.timeStop(); 
			},1000)  
		},
		// 시간 형식으로 변환 리턴
		prettyTime() {
            let time = this.timeCounter / 60;
            let minutes = parseInt(time);
            let secondes = Math.round((time - minutes) * 60);
            return this.pad(minutes, 2) + ":" + this.pad(secondes, 2);
		},	
		// 2자리수로 만들어줌 09,08...
		pad(n, width) {
            n = n + '';
            return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
		},		
		timeStop() {  
            clearInterval(this.polling);
            this.$router.push('/main'); // 시간이 0 되면 자동으로 메인페이지로 감
		}
        /////////////////////////// 타이머끝 //////////////////////////////////
    },
    created (){
        this.start(); // 페이지 시작하면 타이머 돌아감
    }
}
</script>

<style>

</style>