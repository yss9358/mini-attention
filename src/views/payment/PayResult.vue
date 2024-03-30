<template>
<div class="wrap">
    <div class="card-container">
        <div class="card-box">
            <div class="payMsg">
                <div class="finMsg" >
                    결제 완료됨ㅇㅇ
                </div>
                <!-- finMsg -->
                <br>
                <div  class="pointMsg">
                    포인트가 적립됨ㅇㅇ (보유포인트 : 1000)
                </div>
                <!-- pointMsg -->
            </div>
            <!-- payMsg -->
            <div class="timer">
                    <span class="big">{{ timeCounter }}</span>초 후 처음화면으로 돌아갑니다.
            </div>
            <!-- timer -->
            <router-link class="goHome" to="/" >처음화면으로 돌아가기</router-link>
        </div>
        <!-- card-box -->
    </div>
    <!-- card-container -->
</div>
<!-- wrap -->
</template>

<script>
import '@/assets/css/attention.css';
import '@/assets/css/pay.css';



export default{
    name : 'PayResult',
    components : {},
    data(){
        return {
            timeCounter : 30,
            resTimeData : '',
            param : this.$route.params.point // 적립여부 데이터  1이면 적립함 2면 적립안함
            
        };
    },
    methods : {
        pointOn(){
            console.log("pointOn");
            
            
        },
        timer(){
            console.log("timer");
        },


        /////////////////////////////////////// 타이머 ///////////////////////////////////////
        // 타이머 data에 timeCounter : 초 , restTimeData : "" 작성
        start(){
			// 1초에 한번씩 start 호출
			this.polling = setInterval( () =>{
				this.timeCounter--; //1찍 감소
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
            // this.$router.push('/'); // 시간이 0 이 되면 메인페이지로 이동
		}
         /////////////////////////////////////// 타이머 ///////////////////////////////////////
    },    
    created (){
        this.start();
    }
}
</script>

<style>

</style>