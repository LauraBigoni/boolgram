<template>
	<footer class="footer">
		<span class="copyright">&copy; {{ copyrightText }}</span>
	</footer>
</template>

<script>
export default {
	name: "FooterComponent",
	data() {
		return {
			copyrightText: "2020 INSTAGRAM FROM FACEBOOK",
		};
	},
};
</script>

<style scoped>
.footer {
	padding: 0 16px;
}

.copyright {
	font-size: 12px;
	font-weight: 300;
	color: rgb(97, 97, 97);
}
</style>