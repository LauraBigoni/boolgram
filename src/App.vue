<template>
	<div id="app">
		<!-- ICONS:
		<font-awesome-icon icon="fa-regular fa-comment" />
		<font-awesome-icon icon="fa-solid fa-house" />
		<font-awesome-icon icon="fa-regular fa-heart" />
		<font-awesome-icon icon="fa-solid fa-heart" /> -->

		<Nav></Nav>
		<LeftComponent></LeftComponent>
		<RightComponent></RightComponent>
	</div>
</template>

<script>
import Nav from "@/components/Nav";
import RightComponent from "@/components/homepage/RightComponent/RightComponent";
import LeftComponent from "@/components/homepage/LeftComponent/LeftComponent";

export default {
	name: "App",
	components: { Nav, RightComponent, LeftComponent },
};
</script>

<style>
</style>
