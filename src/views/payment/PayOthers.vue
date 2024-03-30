<template>

        <div class="modal">
            <form >
                <div class="modal-content">
                    <span class="modal-massge">바코드를 입력해주세요</span>
                    <button class="modalColse">X</button>

                    <div class="otherPay">
                        <div class="payTable" v-for="(list,i) in payTable" v-bind:key="i">
                            <img v-bind:src="list.src">
                            <p>{{ list.name }}</p>
                        </div>
                    </div>
                    <!-- ortherPay -->
                    <div class="barcodeScan">
                        <img v-bind:src="barcodeImg" v-on:click="goResult">
                    </div>
                    <!-- barcodeScan -->
                </div>
                <!-- modal-content -->
            </form>
            <!-- form -->
        </div>
        <!-- card-modal -->
 

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
    },
    created (){

    }
}

</script>

<style>

</style>