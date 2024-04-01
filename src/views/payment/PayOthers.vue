<template>
<div class="wrap">
    <div class="card-container">
        <div class="pays-logo">
            <img src="../../assets/images/attention.png">
        </div>
        <div class="card-box">
            <div class="barcodeScan">
                <img v-bind:src="barcodeImg" v-on:click="goResult" data-no="1">
            </div>
            
            <ul class="otherPay">
                <li class="payTable" v-for="(list,i) in payTable" v-bind:key="i" v-on:click="othersClick" >
                    <img v-bind:src="list.src">
                    <p>{{ list.name }}</p>
                </li>
            </ul>
            <!-- ortherPay -->
            
            <!-- barcodeScan -->
            <div class="text-others">
                <span class="modal-message">바코드를 입력해주세요</span><br>
                <div class="timer">
                    <span class="big">{{ timeCounter }}</span>초 후 주문이 취소됩니다.<br>
                    <!-- 시간초가 지나갈동안 결제가 안되면 메인으로 돌아감 -->
                    <!-- 결제가 완료되면 payresult로 감 -->     
                </div><br>
                <!-- timer -->
                
                <router-link to="/" class="cancelBtn">주문 취소</router-link>
            </div>
            <!-- text-others -->
        </div>
        <!-- card-box -->
    </div>
    <!-- card-container -->
</div>
<!-- wrap -->
</template>

<script>
import '@/assets/css/attention.css'
import '@/assets/css/pay.css'

export default{
    name : 'PayOthers',
    components : {},
    data(){
        return {
            barcodeImg : require('../../assets/images/barcode.png'), // 바코드 이미지
            timeCounter : 30, // 타이머 시간초
            resTimeData : '', // 남은시간 표기 
            changeColor : false,
            payTable : [ // 결제수단 이미지 
                { // 삼성페이
                    name: '삼성페이', 
                    src : require('../../assets/images/samsungpay.png')
                },
                { // 네이버페이
                    name : '네이버페이',
                    src : require('../../assets/images/naverpay.png')
                },
                { // 카카오페이
                    name : '카카오페이',
                    src : require('../../assets/images/kakaopay.png')
                }
            ]
        };
    },
    methods : {
        goResult(){
            this.$store.commit("setPayType", "기타");
            this.$router.push('/pays/result');
        },
        othersClick(e){
          e.target.parentElement.style.backgroundColor = '#5e2d1a' ;
          e.target.parentElement.style.color = 'white';
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
        this.start();
    }
}

</script>

<style>

</style>