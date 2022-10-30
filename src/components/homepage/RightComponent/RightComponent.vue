<template>
	<div class="right-component">
		<Profile></Profile>
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
};
</script>

<style>
</style>