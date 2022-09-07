<template>
  <!--main-->
  <div class="wrap relative h-screen bg-blue-800 flex justify-center">
    <div class="mouth-wrap flex justify-center w-1/2 self-end">
      <div class="mouth relative flex justify-center w-full">
        <div class="cube"></div>
        <!--<img src="https://oasiscannabis.co/images/mouth.svg" alt="" />-->
        <!--<img
          src="https://oasiscannabis.co/images/eye.svg"
          alt=""
          class="absolute w-1/4"
          style="top: 35%"
        />-->
      </div>
    </div>
  </div>
  <div class="" style="height: 25vh">
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
    lorem lorem lorem lorem lorem lorem lorem lorem lorem
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  mounted() {
    var tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".wrap",
          scrub: 0.3,
          start: "top top",
          pin: true,
        },
      })
      .to(".cube", {
        css: { scale: 5, borderRadius: "0", duration: 3 },
        transformOrigin: "bottom center",
      });
  },
};
</script>

<style lang="scss" >
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/reset.scss";

.wrap {
  width: 100%;
	overflow: hidden;
}

.mouth {
  margin-top: -70%;
}

.cube {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 0;
  border-radius: 50%;
  border: 1px solid black;
}
</style>
