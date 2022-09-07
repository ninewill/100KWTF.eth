<template>
  <!--footer-->
  <footer class="footer">
    <div class="footer-wrap">
      <div class="footer-logo">
        <a href="https://www.appedu.com.tw/" target="_blank">赫綵設計學院</a>
      </div>
      <ul class="footer-media">
        <li class="footer-media-icon fb">
          <a href="https://www.facebook.com/appedu/" target="_blank"
            >facebook</a
          >
        </li>
        <li class="footer-media-icon line">
          <a
            href="https://page.line.me/ksn8716p?openQrModal=true"
            target="_blank"
            >line</a
          >
        </li>
        <li class="footer-media-icon yt">
          <a
            href="https://www.youtube.com/user/AppeduDesignTraining"
            target="_blank"
            >youtube</a
          >
        </li>
        <li class="footer-media-icon ig">
          <a href="https://www.instagram.com/appedudesign/" target="_blank"
            >instagram</a
          >
        </li>
      </ul>
      <div class="footer-contact"></div>
      <div class="footer-copyright">
        <span>Copyright ©Appedu. All rights reserved.</span>
        <span
          >赫綵電腦有限公司保有活動內容更改之權利，最新資訊以活動網站為主。</span
        >
      </div>
    </div>
  </footer>
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
  // * FOOTER 區塊
  // * ==========================================================================


.footer {
	display: block;
	margin-left: 44px;
	background-color: $color-primary-4;

	&.footer-2{
		position: relative;
		background-color: $color-primary-3;
	}

	@include min-width(768px) {
		display: none;
	}
}

.footer-wrap{
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 350px;
	margin: 0 auto;
	padding: 38.7px;

	@include max-width(640px) {
		width: 100%;
	}
}


.footer-logo{
	width: 168.5px;
	height: 38px;
	margin: 0 auto;
	@include hidetext;

	>a{
		width: 100%;
		height: 100%;
		display: block;
		background: url("@/assets/images/icon/Logo.svg") no-repeat center/cover;
	}
}

.footer-media{
	display: flex;
	justify-content: space-between;
	margin-top: 36.2px;
}

.footer-media-icon{
	margin-right: 1rem;
	@include hidetext;

	>a{
		width: 100%;
		height: 100%;
		display: block;
	}


	&:last-child{
		margin-right: 0;
	}

	&.fb{
		width: 29px;
		height: 29px;
		background: url("@/assets/images/icon/FB.svg") no-repeat center/cover;
	}
	&.line{
		width: 29px;
		height: 29px;
		background: url("@/assets/images/icon/line-icon.svg") no-repeat center/cover;
	}
	&.yt{
		width: 29px;
		height: 29px;
		background: url("@/assets/images/icon/YT.svg") no-repeat center/cover;
	}
	&.ig{
		width: 29px;
		height: 29px;
		background: url("@/assets/images/icon/Ins.svg") no-repeat center/cover;
	}
}

.footer-contact{
	width: 232px;
	height: 38px;
	margin-top: 35px;
	background: url("@/assets/images/icon/Tel.svg") no-repeat center/cover;
}

.footer-copyright{
	margin-top: 28px;

	>span{
		text-align: center;
		display: block;
		color: $color-white;
		font-size: 12px;

		margin-bottom: 0.5rem;

		&:last-child{
			margin-bottom: 0;
		}
	}
}
</style>