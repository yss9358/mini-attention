<template>
<div class="wrap">
    <div class="card-container">
        <div class="pays-logo">
            <img src="../../assets/images/attention.png">
        </div>
        <!-- pays-logo -->
        <div class="card-box">
            <img class="receiptImg" src="../../assets/images/receipt.png">
            <div class="receiptList">
                <p>결제 완료</p>
                <table  class="orderList">
                    <colgroup>
                        <col style="width: 220px;">
                        <col style="width: 80px;">
                        <col style="width: 120px;">
                    </colgroup>
                    <thead>
                        <tr>
                            <th>상품명</th>
                            <th>수량</th>
                            <th>금액</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(list, i) in orderList" v-bind:key="i">
                            <td>{{ list.name }}</td>
                            <td>{{ list.count }}</td>
                            <td>{{ list.price }}</td>
                        </tr>
                    </tbody>
                </table>
            </div><!--receipt-->
            <div class="payMsg">
                <span class="finMsg" >
                    결제 금액 : 21,000 원 ,
                </span>
                <!-- finMsg -->
                <span  class="pointMsg">
                    보유 포인트 : 2,000 점 
                </span>
                <!-- pointMsg -->
            </div>
            <!-- payMsg -->
            
        </div>
        <!-- card-box -->
        <div class="text-result">
            <div class="timer">
                <span class="big">{{ timeCounter }}</span>초 후 처음화면으로 돌아갑니다.
            </div>
            <!-- timer -->
            <router-link class="goHome" to="/" >처음화면으로 돌아가기</router-link>
        </div>
        <!-- text-result -->
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
            param : this.$route.params.point, // 적립여부 데이터  1이면 적립함 2면 적립안함
            orderList : [
                {
                    name : '아메리카노',
                    count : 2,
                    price : 3000
                },
                {
                    name : '라떼',
                    count : 5,
                    price : 3000
                }
            ]
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