<template>
<div class="wrap">
    <div class="mainViewContainer">
        <!-- https://jjineei.tistory.com/10 -->
        <!-- npm install vue3-carousel -->
        <div class="wrapper" v-on:click="goMain">
            <Carousel :autoplay="5000" :wrap-around="true">
                <Slide v-for="slide in slides" :key="slide">
                    <div class="carousel__item">
                        <img class="slideImg" :src="slide" />
                    </div>
                </Slide>
            </Carousel>
        </div>
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

export default defineComponent({
	name: "AutoPlay",
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
        goMain(){
            this.$router.push('/main');
        },
    },
    created (){
    
    }
});
</script>

<style>
.carousel__item {
	color: var(--vc-clr-white);
	font-size: 20px;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.carousel__slide {
	padding: auto auto;
}

.carousel__prev, .carousel__next {
	box-sizing: content-box;
}
.slideImg {
    width: 805px;
    height : 953px;
}
.wrapper {
    z-index: 0;
}
</style>