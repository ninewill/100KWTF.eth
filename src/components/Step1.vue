<template>
  <div class="step1">
    <div class="div-block-l">
      <div class="step-img">
        <img src="@/assets/images/active/1.png" alt="圖片" />
      </div>
    </div>
    <div class="div-block-r">
      <div class="step-img">
        <img src="@/assets/images/active/1-1.png" alt="圖片" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/reset.scss";
@import "@/assets/scss/main.scss";

// * ==========================================================================
// * STEP 1 區塊
// * ==========================================================================

.step1 {
  @include min-width(1025px) {
    margin-top: 5%;
    display: flex;
  }

  .div-block-l {
    width: 100%;
    padding: 3%;
    outline-color: $color-primary-2;
    outline-offset: 0px;
    outline-style: solid;
    outline-width: 1px;

    > img {
      width: 100%;
      height: 100%;
    }

    @include min-width(1025px) {
      width: 50%;
    }

    > .h2 {
      padding-bottom: 1.5rem;
      border-bottom: 1px solid $color-primary-2;
      font-size: 26px;
      color: $color-primary-2;

      @include min-width(1025px) {
        font-size: 3vw;
      }
    }

    > p {
      padding-top: 1.5rem;
      font-size: 16px;
      line-height: 1.5;
      color: $color-primary-2;

      @include min-width(1025px) {
        font-size: 1.8vw;
      }
    }
  }

  .div-block-r {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3%;
    outline-color: $color-primary-2;
    outline-offset: 0px;
    outline-style: solid;
    outline-width: 1px;

    > img {
      width: 100%;
    }

    @include min-width(1025px) {
      width: 50%;
    }
  }

  .step-img {
    > img {
      width: 100%;
      height: 100%;
    }
  }

  > p {
    width: 70%;
    padding: 10px;
    line-height: 1.5;
    font-size: 16px;

    @include min-width(1025px) {
      font-size: 1.3vw;
    }
  }
}
</style>
