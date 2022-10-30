<template>
	<div class="left-component">
		<Stories></Stories>
		<Posts></Posts>
	</div>
</template>

<script>
import Stories from "@/components/homepage/LeftComponent/stories/Stories";
import Posts from "@/components/homepage/LeftComponent/posts/Posts";

export default {
	name: "LeftComponent",
	components: { Stories, Posts },
};
</script>

<style>
</style>