<template>
<div class="wrap">
    <div class="card-container">
        <div class="card-box">
            <img src="../../assets/images/creditcard.png" v-on:click="goResult"><br>
            <div class="timer">
                <span class="big">{{ timeCounter }}</span>초가 지나면 주문이 취소됩니다.
                <!-- 시간초가 지나갈동안 결제가 안되면 메인으로 돌아감 -->
                <!-- 결제가 완료되면 payresult로 감 -->
            </div>
            <!-- timer -->
            
            <div>
                {{ payMessage }}
            </div>
            <!-- 안내메세지 -->
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
    name : 'PayCard',
    components : {},
    data(){
        return {
            timeCounter : 10, // 타이머 시간초
            resTimeData : '', // 남은시간 표기 
            point : '', // 포인트 적립여부 데이터
            payMessage : '카드를 여기다가 넣으라고' // 안내 메세지 
        };
    },
    methods : {
        goResult(){
            console.log("승인");
            ////////// 반복문 작성 자리//////////////
            // 적립됐다는 데이터가 안넘어오면 1
            // this.point = 1;
            // this.$router.push({
            //     path : '/pays/result',
            //     query : {
            //         point : 1
            //     }
            // });

            // 적립됐다는 데이터가 넘어오면 2
            this.point = 2;
            this.$router.push({
                path : '/pays/result',
                query : {
                    point : 2
                }
            });
            ////////////////////////////////////////
        },

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
            // this.$router.push('/'); // 시간이 0 되면 자동으로 메인페이지로 감
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