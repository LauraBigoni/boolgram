<template>
	<div class="right-component">
		<Profile :user="user"></Profile>
		<Suggestion></Suggestion>
		<Footer></Footer>
	</div>
</template>

<script>
import Profile from "@/components/homepage/RightComponent/components/Profile";
import Footer from "@/components/homepage/RightComponent/components/Footer";
import Suggestion from "@/components/homepage/RightComponent/components/Suggestion";

export default {
	name: "RightComponent",
	components: { Profile, Suggestion, Footer },
	props: ["user"],
};
</script>

<style scoped>
.right-component {
	display: flex;
	flex-direction: column;
	height: calc(100vh - 61px);
}
</style>