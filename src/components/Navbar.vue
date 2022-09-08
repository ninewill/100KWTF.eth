<template>
 <section class="section is--nav">
	<div class="nav">
		<div class="nav_logo">
			<img src="@/assets/images/logo.png" alt="圖片" />
		</div>
	</div>
 </section>
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
// * HEADER 區塊
// * ==========================================================================

.is--nav{
	position: fixed;
	left: 0%;
	top: 0%;
	right: 0%;
	bottom: auto;
	z-index: 1000;
	background-color: $color-primary-1;
}

.nav{
	padding: 10px 30px;

	.nav_logo{
		width: 232px;
		height: 60px;
		margin: 0 auto;

		>img{
			height: 100%;
		}
	}
}

</style>