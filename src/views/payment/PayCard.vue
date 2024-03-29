<template>
<div class="wrap">
    <div class="card-container">
        <div class="card-box">
            <img src="../../assets/images/creditcard.png" v-on:click="getMoney"><br>
            <div class="timer">
                <span>{{ timeCounter }}초가 지나면 주문이 취소됩니다.</span>
                <!-- 시간초가 지나갈동안 결제가 안되면 메인으로 돌아감 -->
                <!-- 결제가 완료되면 payresult로 감 -->
            </div>
            <!-- timer -->
            
            <div>
                카드를 여기다가 넣으라고
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
            timeCounter : 30,
            resTimeData : '',
            money : ''
        };
    },
    methods : {
        // 타이머 data에 timeCounter : 초 , restTimeData : "" 작성
        start(){
			// 1초에 한번씩 start 호출
			this.polling = setInterval( () =>{
				this.timeCounter-- //1찍 감소
				this.resTimeData = this.prettyTime()
				if (this.timeCounter <= 0) this.timeStop()
			},1000)
		},
		// 시간 형식으로 변환 리턴
		prettyTime() {
            let time = this.timeCounter / 60
            let minutes = parseInt(time)
            let secondes = Math.round((time - minutes) * 60)
            return this.pad(minutes, 2) + ":" + this.pad(secondes, 2)
		},	
		// 2자리수로 만들어줌 09,08...
		pad(n, width) {
            n = n + '';
            return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n
		},		
		timeStop() {
            clearInterval(this.polling)
		},
        getMoney(){
            console.log("승인");
        }
    },
    created (){
        this.start();
    }
}
</script>

<style>

</style>