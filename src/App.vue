<template>
  <div id="wrapper" class="layout">
    <Navbar />
    <router-view />
		<Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
		Footer
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/reset.scss";
@import "@/assets/scss/main.scss";

html,
body {
  width: 100%;
  height: 100%;
  font-size: map-get($fontsize, 5);
}

body {
  line-height: 1.6em;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  font-size: 1rem;
  letter-spacing: 0.5px;
	background-color: $color-black;
}

// * ==========================================================================
// * 包覆整個網頁的區塊
// * ==========================================================================

#wrapper,
#app {
  width: 100%;
  height: 100%;
}

.layout {

}

// * ==========================================================================
// * 主要內容區域（#main 裡面的基本樣式）
// * ==========================================================================

#main {
  padding-top: 37px;
  padding-bottom: 37px;
  padding-left: 74px;
  padding-right: 30px;
  position: relative;

  @include min-width(768px) {
    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: 0;
  }

  // 單頁式網站的主要內容區塊
  &.anchor-main {
    padding-top: 0px;
    padding-bottom: 0px;
  }
}

// * ==========================================================================
// * 頁面外圍控制整體布局寬度
// * ==========================================================================

.wrap {
  width: calc(100% - 10%);
  margin: auto;
}

.wrap-content {
  width: 100%;
}

.layout-1 {
  width: 100%;
  min-height: 776px;
  background-color: $color-black;
  transition: 0.2s;
  min-height: 776px;

  @include min-height(800px) {
    min-height: 80vh;
  }
}
</style>
