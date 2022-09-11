<template>
  <!--main-->
  <div class="wrap-scroll">
    <div class="circle-wrap">
      <div class="circle">
        <div class="circle_element">
          <div class="video">
            <video autoplay muted loop>
              <source
                src="@/assets/images/video/100kwtf-top.mp4"
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
        <div class="div-block-l">
          <h2 class="h2">ART X NFT</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus repudiandae consequuntur corrupti voluptas laboriosam, sequi, harum in consectetur autem dolorum aperiam itaque? Non culpa aliquam alias cupiditate debitis ut iste?
          </p>
        </div>
        <div class="div-block-r">
          <div class="ui-avatar">
            <div class="ui-video">
              <video autoplay muted loop>
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
            reiciendis eaque debitis vitae! Quidem accusamus animi cum totam
            natus, rerum corporis delectus, maiores nemo quis eveniet commodi
            illum. Aut, illo!
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="div"></div>
</template>

<script>
// @ is an alias to /src

export default {
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

<style lang="scss">
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
    outline-color: $color-white;
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
      display: flex;
      margin-top: 5%;
      margin-right: 10%;
      margin-left: 10%;

      &:first-child {
        margin-top: 0;
      }

      .div-block-l {
        width: 50%;
        padding: 5%;
        outline-color: $color-white;
        outline-offset: 0px;
        outline-style: solid;
        outline-width: 1px;

        > .h2 {
          padding-bottom: 1.5rem;
          border-bottom: 1px solid $color-white;
          font-size: 2.5vw;
          color: $color-white;
        }

        > p {
          padding-top: 1.5rem;
          font-size: 1.2vw;
          line-height: 1.5;
          color: $color-white;
        }
      }

      .div-block-r {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5%;
        outline-color: $color-white;
        outline-offset: 0px;
        outline-style: solid;
        outline-width: 1px;

        .ui-avatar {
          position: sticky;
          display: flex;
          overflow: hidden;
          width: 288px;
          height: 288px;
          min-width: 288px;
          min-height: 288px;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          outline-color: #fff;
          outline-offset: 10px;
          outline-style: solid;
          outline-width: 1px;

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
  }
}

.div{
  margin-top: 3rem;
  height: 50px;
}
</style>
