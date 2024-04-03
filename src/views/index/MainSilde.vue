<template>
<div class="wrap">
    <div class="mainViewContainer">
        <!-- https://jjineei.tistory.com/10 -->
        <!-- npm install vue3-carousel -->
        <div class="wrapper" v-on:click="footerMessage">
            <Carousel :autoplay="5000" :wrap-around="true">
                <Slide v-for="slide in slides" :key="slide">
                    <div class="carousel__item">
                        <img class="slideImg" :src="slide" />
                    </div>
                </Slide>
            </Carousel>
        </div>
        
        <!-- wrapper -->
        <div class="mainBtn">   
            <div class="beforeTouch">화면을 터치해주세요</div>
            <div class="afterTouch">
                <router-link to="/">매장</router-link>
                <router-link to="/">포장</router-link>
            </div>
        </div>
        <!-- mainBtn -->
    </div>
    <!-- mainViewContainer -->
</div>   
<!-- wrap  -->
</template>


<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import slide01 from "@/assets/images/slide01.png";
import slide02 from "@/assets/images/slide02.jpg";
import slide03 from "@/assets/images/slide03.jpg";
import slide04 from "@/assets/images/slide04.jpg";
import "vue3-carousel/dist/carousel.css";
import '@/assets/css/attention.css'
import '@/assets/css/mainpage.css'

export default defineComponent({
	name: "MainSlide",
	components: {
		Carousel,
		Slide
	},
	data() {
		return {
			slides: [slide01, slide02, slide03, slide04],
		};
	},
    methods: {
        // 화면 클릭하면 안내 메세지 바뀜
        footerMessage(){
            let beforeTouch = document.querySelector(".beforeTouch");
            let afterTouch = document.querySelector(".afterTouch");
            beforeTouch.style.display = "none";
            afterTouch.style.display="block";
        }
        
    },
    created (){
        this.$store.commit('setCartList',null); // 장바구니 비우기
        this.$store.commit('setPay', null); // 결제 방법 비우기
        this.$store.commit('setUserVo', null); // 적립한 사람의 정보 지우기
        this.$store.commit('setSavePoint',null); // 적립된 포인트 정보 지우기
    }
});
</script>

<style>

</style>