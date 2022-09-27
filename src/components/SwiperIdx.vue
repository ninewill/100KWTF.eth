<template>
  <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="@/assets/images/swiper/1.png" alt="圖片" />
      </div>
      <div class="swiper-slide">
        <img src="@/assets/images/swiper/2.png" alt="圖片" />
      </div>
      <div class="swiper-slide">
        <img src="@/assets/images/swiper/3.png" alt="圖片" />
      </div>
			<div class="swiper-slide">
        <img src="@/assets/images/swiper/4.png" alt="圖片" />
      </div>
			<div class="swiper-slide">
        <img src="@/assets/images/swiper/5.png" alt="圖片" />
      </div>
			<div class="swiper-slide">
        <img src="@/assets/images/swiper/6.png" alt="圖片" />
      </div>
			<div class="swiper-slide">
        <img src="@/assets/images/swiper/7.png" alt="圖片" />
      </div>
			<div class="swiper-slide">
        <img src="@/assets/images/swiper/8.png" alt="圖片" />
      </div>
    </div>
		<div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      //autoplay: {
      //  delay: 6000,
      //  disableOnInteraction: false,
      //},
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/swiper.scss";

.swiper {
  max-width: 100%;
	margin: 0 auto !important;
  position: relative;
  overflow: hidden;

	@include min-width(1025px) {
		max-width: 760px;
	}

	@include min-width(1280px) {
		max-width: 960px;
	}

	@include min-width(1400px) {
		max-width: 1000px;
	}

	@include min-width(1650px) {
		max-width: 1200px;
	}

	@include min-width(1920px) {
		max-width: 1400px;
	}
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>