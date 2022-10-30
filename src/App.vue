<template>
	<div id="app">
		<!-- ICONS:
		<font-awesome-icon icon="fa-regular fa-comment" />
		<font-awesome-icon icon="fa-regular fa-heart" />
		<font-awesome-icon icon="fa-solid fa-heart" /> -->

		<Nav></Nav>
		<main class="components">
			<LeftComponent></LeftComponent>
			<RightComponent></RightComponent>
		</main>
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
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap");

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: 'Montserrat', sans-serif;
	font-weight: 400;
}

#app {
	height: 100vh;
}

.components {
	display: flex;
}

.components > :first-child {
	flex: 2;
}

.components > :nth-child(2) {
	flex: 1;
}
</style>
