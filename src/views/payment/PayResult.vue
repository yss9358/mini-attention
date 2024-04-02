<template>

<div class="wrap">

    <div class="card-container">
        
        <AppPayHeader/>
        <!-- 로고부분 -->

        <div class="card-box">

            <img class="receiptImg" src="../../assets/images/receipt.png">

            <div class="receiptList">
                <p>주문 완료 (주문 번호 : {{ orderNo }} <!--가져와야함--> )</p>

                <div class="order-receipt">
                    <table class="orderList">
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
                </div>
                <!-- order-receipt 테이블 -->

            </div>
            <!--receiptList-->

            <div class="payMsg">

                <span class="finMsg" >
                    결제 금액 : {{ this.outPrice }} 원 
                </span><br><br>
                <!-- finMsg -->

                <span v-if="this.$store.state.userVo.no != null"  class="pointMsg">
                    {{ this.$store.state.userVo.hp }}님  보유 포인트 : {{ this.outPoint}} 점 
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

            <router-link class="goHome" to="/main">처음화면으로 돌아가기</router-link>

        </div>
        <!-- text-result -->

    </div>
    <!-- card-container -->

</div>
<!-- wrap -->

</template>

<script>
import '@/assets/css/attention.css';
import '@/assets/css/payend.css';
import '@/assets/css/scrollbar.module.css'
import AppPayHeader from '@/components/AppPayHeader.vue'
import axios from 'axios';

export default{
    name : 'PayResult',
    components : {
        AppPayHeader
    },
    data(){
        return {
            timeCounter : 10, // 타이머
            resTimeData : '', // 타이머
            userVo : {}, // 결제되었습니다 밑에 정보 보여주려고 만듬
            orderNo : '', // 주문 번호
            totalPrice : 0, // 결제한 금액 총합
            outPrice : "", // 총합이 보여질 문자열
            outPoint : "", // 보유포인트 보여질 문자열
            
            orderList : [ // 주문 결제 내역 - 합치면 내용 지워야함
                {
                    no : 1,
                    name : '아메리카노',
                    count : 2,
                    price : 3000
                },
                {
                    no : 1,
                    name : '라떼',
                    count : 5,
                    price : 3000
                }
                ,
                {
                    no : 1,
                    name : '라떼',
                    count : 5,
                    price : 3000
                },
                {
                    no : 1,
                    name : '라떼',
                    count : 5,
                    price : 3000
                },
                {
                    no : 1,
                    name : '라떼',
                    count : 5,
                    price : 3000
                },
                {
                    no : 1,
                    name : '라떼',
                    count : 5,
                    price : 3000
                },
                {
                    no : 1,
                    name : '라떼',
                    count : 5,
                    price : 3000
                },
                {
                    no : 1,
                    name : '라떼',
                    count : 5,
                    price : 3000
                },
                {
                    no : 1,
                    name : '라떼',
                    count : 5,
                    price : 3000
                }
            ],

            billVo : { // db 에서 bill 테이블에 넣을 데이터
                userNo : this.$store.state.userVo.no,
                total : "",
                point : this.$store.state.savePoint
            }
        };
    },

    methods : {
        
        // 결제완료된 데이터 등록, 주문번호 받아오기
        goMain (){  // 결제완료되면 결제완료 페이지로 이동되고 데이터를 보내서 등록,
                    // 주문번호를 받아와서 화면에 표시 
            let data = {};
            data.billVo = this.billVo;      // bill 테이블에 등록할 데이터
            data.list = this.orderList;     // sales 테이블에 등록할 데이터

            axios({
                method: 'post', // put, post, delete
                url: 'http://localhost:9100/at/pays',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달 -> modelattribute
                data: data,  //put, post, delete 방식 자동으로 JSON으로 변환 전달 -> requestbody

                responseType: 'json' //수신타입
            }).then(response => {
                // 등록성공하면 주문번호 가져옴
                if(response.data.result == 'success'){ 
                    this.orderNo = response.data.apiData;
                } else {
                    alert(response.data.message);
                }

            }).catch(error => {
                console.log(error);
            });
        },

        // 리스트 가져오기
        getOrderList(){ // storage보고 내용 바꾸기
            console.log("getOrderList");
            // this.orderList = this.$store.state.orderlist;
        },

        // 유저정보 가져오기
        getUserVo(){
            if(this.$store.state.userVo.no != 0){
                this.userVo.no = this.$store.state.userVo.no;
                this.userVo.hp = this.$store.state.userVo.hp;
                this.userVo.point = this.$store.state.userVo.point;
            } else {
                this.$store.commit('setUserVo',{no:0, hp:null, point: null});
            }
        },

        
        // 총 매출 표기
        plus(){
            let count = 0;
            for(let i=0; i<this.orderList.length; i++){
                count += (this.orderList[i].count)*(this.orderList[i].price);
            }
            this.billVo.total = Number(count);
            this.totalPrice = Number(count);
            let total = this.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
            this.outPrice = total;
        },


        // 포인트 표기 
        getPoint(){
            let point = Number(this.$store.state.userVo.point);
            this.outPoint = point.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
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
            // this.$router.push('/main'); // 시간이 0 이 되면 메인페이지로 이동
		}
         /////////////////////////////////////// 타이머 ///////////////////////////////////////
    },    
    created (){
        this.start(); // 타이머
        this.getUserVo(); // 정보 모을때 사용 
        this.getOrderList(); // 장바구니 가져오기
        this.plus(); // 총합구하기
        this.getPoint(); // 포인트 나타낼때 쓰는거 
        this.goMain(); // 데이터 넘기고 받기 
    }
}
</script>

<style>

</style>