<template>
  <!--main-->
  <div class="wrap-scroll">
    <div class="circle-wrap">
      <div class="circle">
        <div class="circle_element">
          <div class="video">
            <video autoplay muted loop playsinline>
              <source
                src="@/assets/images/video/100kwtf-top1.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="wtf-section">
      <div class="flex-container">
        <div class="div-block-r">
          <!-- <div class="gob-6257">
            <img src="@/assets/images/6257.png" alt="圖片" />
          </div> -->
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
        </div>
        <div class="div-block-l">
          <h2 class="h2">ABOUT ME</h2>
          <p>我是編號6257，ₐₐₐₐₐₐₐᵤᵤᵤᵤᵤGGGₕₕₕₕₕ ₙₒ ₑₑₙₛₜₐgᵣᵤₘ ₙₒ dₑₛcᵤᵣd</p>
        </div>
      </div>
      <div class="flex-container">
        <div class="div-block-l">
          <h2 class="h2">ART X NFT</h2>
          <p>
            100kwtf.eth 為新一代數位藝術網站創建NFT。第一個系列”Genesis”於 2023
            年 1 月在 OpenSea 上推出，標誌著我們進入 NFT 領域。
          </p>
        </div>
        <div class="div-block-r">
          <div class="ui-avatar">
            <div class="ui-video">
              <video autoplay muted loop playsinline>
                <source
                  src="@/assets/images/video/100kwtf-2.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-container">
        <div class="div-block-r">
          <img src="@/assets/images/space-pod2.png" alt="圖片" />
        </div>
        <div class="div-block-l">
          <h2 class="h2">ARCHITECTURE x METAVERSE</h2>
          <p>
            100kwtf.eth
            為開放且無限的元宇宙設計空間和資產。專注於網頁上優雅而微妙的設計。
          </p>
        </div>
      </div>
      <div class="flex-container">
        <div class="div-block-l">
          <h2 class="h2">100KWTF.eth STUDIO</h2>
          <p>
            恭喜你即將進入我們的 VIP太空艙(100kwtf pod
            -VIP)，裡面有許多不可思議的東西正在等著你。
            <br />#彩色曲線的畫也許你會很感興趣
          </p>
        </div>
        <div class="div-block-r">
          <div class="btn">
            <a href="https://oncyber.io/100kwtfpod" target="_blank">enter</a>
          </div>
        </div>
      </div>
      <div class="flex-container">
        <div class="paragraph">
          <p>100KWTF.ETH STUDIOS</p>
        </div>
      </div>
			<div class="flex-container">
				<div class="roadmap">
					<img src="@/assets/images/roadmap.png" alt="圖片" />
				</div>
			</div>
      <div class="flex-container tab-wrap">
        <Tab />
      </div>
    </div>
  </div>
  <div class="div"></div>
</template>

<script>
// @ is an alias to /src

import Tab from '@/components/Tab.vue';

export default {
  components: {
    Tab,
  },
  mounted() {
    var tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: '.wrap-scroll',
          scrub: 1,
          start: 'top top',
          pin: true,
        },
      })
      .to('.circle_element', {
        css: {
          width: '100vw',
          height: '100vh',
          borderRadius: '0',
          duration: 1,
        },
      });
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixin.scss';
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/reset.scss';

.wrap-scroll {
  width: 100%;
  height: 100vh;
  padding-top: 80px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;

  .circle-wrap {
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .circle {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .circle_element {
    width: 10em;
    height: 10em;
    position: absolute;
    border-radius: 15em;
    overflow: hidden;
    border: 1px none transparent;
    outline-color: $color-primary-2;
    outline-offset: 20px;
    outline-style: solid;
    outline-width: 1px;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .video {
    position: absolute;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    max-width: none;
    min-height: 100vh;
    min-width: 100vw;
    -webkit-box-ordinal-group: 1;

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

.wrapper {
  margin-top: 5rem;
  background-color: transparent;

  .wtf-section {
    .flex-container {
      margin-top: 10%;
      margin-right: 10%;
      margin-left: 10%;

      @include min-width(1025px) {
        margin-top: 5%;
        display: flex;
      }

      &:first-child {
        margin-top: 0;
      }

      .div-block-l {
        width: 100%;
        padding: 5%;
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
            font-size: 1.1vw;
          }
        }
      }

      .div-block-r {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5%;
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

        .gob-6257 {
          width: 50%;

          > img {
            width: 100%;
            vertical-align: middle;
          }
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

		.roadmap{
			>img{
				width: 100%;
			}
		}

    .paragraph {
      width: 100%;
      padding-right: 0%;
      padding-left: 0%;
      outline-color: #fff;
      outline-offset: 0px;
      outline-style: none;
      outline-width: 1px;

      > p {
        margin-top: 20px;
        margin-bottom: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
        background-color: #fff;
        color: $color-primary-3;
        font-size: 24px;
        font-weight: 300;
        text-align: center;
      }
    }

    .tab-wrap {
    }
  }
}

//GOBLIN 6257
.pfp {
  width: 100%;

  .goblin {
    position: relative;
    display: flex;
    justify-content: center;

    .goblin__head {
      width: 300px;
      height: 300px;
      position: absolute;
      animation: wiggle 0.5s linear infinite;

      > img {
        width: 100%;
      }
    }

    .goblin__body {
      width: 300px;
      height: 300px;
      background-color: $color-primary-4;

      > img {
        width: 100%;
      }
    }
  }
}

@keyframes wiggle {
  50% {
    transform: rotate(-5deg);
  }
}

.div {
  margin-top: 3rem;
  height: 50px;
}

.btn {
  display: flex;
  justify-content: center;

  @include min-width(1025px) {
    margin-top: 2rem;
  }

  > a {
    position: relative;
    padding: 0.25rem 1rem;
    display: block;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 700;
    transition: 0.2s;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: -5px;
      left: -5px;
      width: 145px;
      height: 45px;
      border: 1px solid $color-primary-2;
      transition: 0.2s;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0px;
      left: 5px;
      width: 145px;
      height: 45px;
      border: 1px solid $color-primary-2;
      transition: 0.2s;
    }

    @include min-width(1025px) {
      &:hover {
        opacity: 0.6;

        &::before {
          top: -2.5px;
          left: 0;
        }

        &::after {
          top: -2.5px;
          left: 0;
        }
      }
    }
  }
}
</style>
