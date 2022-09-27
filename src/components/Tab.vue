<template>
  <div class="step-active">
    <div class="step-active-nav">
      <a @click="handChangePage(0)" :class="{ active: pageIdx === 0 }">
        <div class="tab-list">
          <span>STEP 1</span>
          <div class="tab-img">
            <img src="@/assets/images/icon/cube.png" alt="圖片" />
          </div>
        </div>
      </a>
      <a @click="handChangePage(1)" :class="{ active: pageIdx === 1 }">
        <div class="tab-list">
          <span>STEP 2</span>
          <div class="tab-img">
            <img src="@/assets/images/icon/border.png" alt="圖片" />
          </div>
        </div>
      </a>
      <a @click="handChangePage(2)" :class="{ active: pageIdx === 2 }">
        <div class="tab-list">
          <span>STEP 3</span>
          <div class="tab-img">
            <img src="@/assets/images/icon/palace.png" alt="圖片" />
          </div>
        </div>
      </a>
      <a @click="handChangePage(3)" :class="{ active: pageIdx === 3 }">
        <div class="tab-list">
          <span>STEP 4</span>
          <div class="tab-img">
            <img src="@/assets/images/icon/map.png" alt="圖片" />
          </div>
        </div>
      </a>
      <a @click="handChangePage(4)" :class="{ active: pageIdx === 4 }">
        <div class="tab-list">
          <span>STEP 5</span>
          <div class="tab-img">
            <!--<img src="@/assets/images/icon/tesla.png" alt="圖片" />-->
          </div>
        </div>
      </a>
    </div>
    <div class="step-active-item">
      <div class="card-page">
        <div class="page page1" v-if="pageIdx === 0">
          <div class="mid">
            <Step1 />
          </div>
        </div>
        <div class="page page2" v-if="pageIdx === 1">
          <div class="mid">
            <Step2 />
          </div>
        </div>
        <div class="page page3" v-if="pageIdx === 2">
          <div class="mid">
            <Step3 />
          </div>
        </div>
        <div class="page page4" v-if="pageIdx === 3">
          <div class="mid">
            <div class="letter">
              <div class="h3">北荒科學院：第一學府或菁英專校？</div>
              <div class="letter-p">
                <p>
                  『6257觀點』年度評鑑將北荒科學院選為台北夜城中等教育機構第一名，四度蟬聯寶座。而該期刊絕大部分的廣告收益雖來自該學院背後的企業，
                  編輯人員卻表示這樣的金錢往來對排名不造成影響。
                </p>
                <p>
                  妳是曾經北荒科學院的學員，因此作為報酬該學院會贈與妳一組科技晶片，晶片就在三創科技幻舞總部大樓的6F，找到switch的專員並跟他說你要領取6257晶片
                </p>
                <p><i>三創科技幻舞總部是由6257集團所創立.....</i></p>
              </div>
            </div>
            <Step4 />
          </div>
        </div>
        <div class="page page5" v-if="pageIdx === 4">
          <div class="mid">
						<div class="letter">
              <div class="h3">開啟世界名畫3.0</div>
              <div class="letter-p">
                <p>
                  當一個企業在資本的驅動下，只要可以牟利。就可以對環境資源進行禍害
                </p>
                <p>
                  在你面前呈現的世界名畫之一的清明上河圖，6257企業透過高科技結合古蹟鑄造
                </p>
                <p><i>尋找出企業團隊的核心成員</i></p>
              </div>
            </div>
						<SwiperIdx />
            <Step5 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Step1 from "@/components/Step1.vue";
import Step2 from "@/components/Step2.vue";
import Step3 from "@/components/Step3.vue";
import Step4 from "@/components/Step4.vue";
import Step5 from "@/components/Step5.vue";
import SwiperIdx from "@/components/SwiperIdx.vue";

export default {
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
		SwiperIdx
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
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/reset.scss";
@import "@/assets/scss/swiper.scss";

// * ==========================================================================
// * TAB 區塊
// * ==========================================================================

.step-active {
  .step-active-nav {
    display: flex;
    border: 1px solid $color-primary-2;

    > a {
      width: 20%;
      padding: 1rem;
      display: block;
      border-right: 1px solid $color-primary-2;
      cursor: pointer;

      &:last-child {
        border-right: none;
      }

      .tab-list {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;
        transition: 0.2s;

        @include min-width(1025px) {
          flex-direction: row;
        }

        > span {
          display: block;
          font-size: 0.9rem;
          text-align: center;

          @include min-width(1025px) {
            margin-right: 1rem;
            font-size: 1vw;
          }
        }

        .tab-img {
          margin-top: 0.5rem;
          width: 100%;

          @include min-width(1025px) {
            margin-top: 0;
            width: 15%;
          }

          > img {
            width: 100%;
            vertical-align: middle;
          }
        }

        @include min-width(1025px) {
          &:hover {
            opacity: 0.7;
          }
        }
      }

      &.active {
        background-color: $color-white;

        .tab-list {
          > span {
            color: $color-primary-3;
          }
        }
      }
    }
  }
}

.step-active-item {
  margin-top: 3rem;

  .card-page {
    @include min-width(1025px) {
      //height: 65vh;
    }

    .page {
      height: 100%;

      .mid {
        height: 100%;
      }
    }
  }
}

.letter {
  margin: 0 auto;

  @include min-width(1025px) {
    max-width: 500px;
  }

  .h3 {
    font-size: 1.2rem;

    @include min-width(1025px) {
      font-size: 1.5vw;
    }
  }

  .letter-p {
    margin-top: 1rem;

    > p {
      margin-bottom: 0.5rem;
      font-size: 1rem;

      > i {
        font-size: 0.8rem;
        font-style: italic;
        color: $color-gray-4;
      }
    }
  }
}

.river {
  > img {
    width: 100%;
  }
}

</style>
