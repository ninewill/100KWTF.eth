<template>
  <div class="step4">
    <div class="div-block-l">
      <div class="map-pop">
        <img src="@/assets/images/100kwtf-map.png" alt="圖片" />
      </div>
      <div class="map-info">
        <div class="pfp">
          <div class="goblin">
            <div class="goblin__body">
              <img src="@/assets/images/6257-pfp-b.png" alt="圖片" />
            </div>
            <div class="goblin__head">
              <img src="@/assets/images/6257-pfp-h.png" alt="圖片" />
            </div>
          </div>
        </div>
        <p>
          I'ₗₗ bₑ waᵢₜᵢₙg fₒᵣ yₒᵤ aₜ ₜₕₑ Naₜᵢₒₙaₗ Taᵢₚₑᵢ Uₙᵢᵥₑᵣₛᵢₜy ₒf
          Tₑcₕₙₒₗₒgy, a ₛₕₒₚₚᵢₙg ₘaₗₗ ₙₑaᵣby!
        </p>
      </div>
    </div>
    <div class="div-block-r item-star">
      <Map />
    </div>
  </div>
</template>

<script>
import Map from "@/components/Map.vue";

export default {
  components: {
    Map,
  },
  data() {
    return {
      pageIdx: 0,
    };
  },
  methods: {
    handChangePage: function (idx) {
      this.pageIdx = idx;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/reset.scss";
@import "@/assets/scss/main.scss";

// * ==========================================================================
// * STEP 4 區塊
// * ==========================================================================

.step4 {
  @include min-width(1025px) {
    margin-top: 5%;
    display: flex;
  }

  &:first-child {
    margin-top: 0;
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

    .map-pop {
			height: 475px;

      > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
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

    &.item-star {
      align-items: start;
    }

    > img {
      width: 100%;
    }

    @include min-width(1025px) {
      width: 50%;
    }

    .ui-avatar {
      position: sticky;
      display: flex;
      overflow: hidden;
      width: 188px;
      height: 188px;
      min-width: 188px;
      min-height: 188px;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      outline-color: $color-primary-2;
      outline-offset: 10px;
      outline-style: solid;
      outline-width: 1px;

      @include min-width(1025px) {
        width: 288px;
        height: 288px;
        min-width: 288px;
        min-height: 288px;
      }

      .ui-video {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;

        > video {
          background-size: cover;
          background-position: 50% 50%;
          position: absolute;
          margin: auto;
          width: 100%;
          height: 100%;
          right: -100%;
          bottom: -100%;
          top: -100%;
          left: -100%;
          object-fit: cover;
          z-index: -100;
        }
      }
    }
  }
}

//goblin

.map-info {
	margin-top: 1rem;
  display: flex;
  align-items: center;

  .pfp {
    width: 30%;

    .goblin {
      display: flex;
      justify-content: flex-end;
      position: relative;

      .goblin__head {
        width: 100px;
        height: 100px;
        position: absolute;
        animation: wiggle 0.5s linear infinite;

        > img {
          width: 100%;
        }
      }

      .goblin__body {
        width: 100px;
        height: 100px;

        > img {
          width: 100%;
        }
      }
    }
  }

  @keyframes wiggle {
    50% {
      transform: rotate(-3deg);
    }
  }

  > p {
    width: 70%;
    padding: 10px;
    line-height: 1.5;
    font-size: 16px;

    @include min-width(1025px) {
      font-size: 1.1vw;
    }
  }
}
</style>
