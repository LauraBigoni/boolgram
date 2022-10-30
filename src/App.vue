<template>
	<div id="app">
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
