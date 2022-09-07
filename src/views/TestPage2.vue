<template>
  <div id="main" class="wrap wrap-content">
			<h1>This is an about page2</h1>
    <div class="component component-from">
      <div class="cd-popup-trigger pupup-btn">form-style1</div>
    </div>
    <Form />
  </div>
</template>

<script>
import Form from "@/components/Form.vue";

export default {
  name: "",
  components: {
    Form,
  },
  mounted() {
    $(".cd-popup-trigger").on("click", function (event) {
      event.preventDefault();
      $(".cd-popup").addClass("is-visible");
    });

    //close popup
    $(".cd-popup").on("click", function (event) {
      if (
        $(event.target).is(".cd-popup-close") ||
        $(event.target).is(".cd-popup")
      ) {
        event.preventDefault();
        $(this).removeClass("is-visible");
      }
    });

    /*
     * ==========================================================================
     * 輪播表單
     * ==========================================================================
     */

    var swiper3 = new Swiper(".popup-swiper-form", {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
    });
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";


.component-from {
  width: 100%;
  display: flex;
  justify-content: center;
}

.pupup-btn {
  display: inline-block;
  text-align: center;
  padding: 1rem 2rem;
  margin-top: 2rem;
  border-radius: 10px;
  background-color: $color-primary-2;
  color: #fff;
  cursor: pointer;
}
</style>