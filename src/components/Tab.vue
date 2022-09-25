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
            <Step4 />
          </div>
        </div>
        <div class="page page5" v-if="pageIdx === 4">
          <div class="mid">
            <Step5 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Step1 from '@/components/Step1.vue';
import Step2 from '@/components/Step2.vue';
import Step3 from '@/components/Step3.vue';
import Step4 from '@/components/Step4.vue';
import Step5 from '@/components/Step5.vue';

export default {
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
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
@import '@/assets/scss/mixin.scss';
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/reset.scss';
@import '@/assets/scss/main.scss';

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
      height: 65vh;
    }

    .page {
      height: 100%;

      .mid {
        height: 100%;
      }
    }
  }
}
</style>
