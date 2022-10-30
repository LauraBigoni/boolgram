<template>
	<div class="left-component">
		<Stories :stories="stories"></Stories>
		<Posts></Posts>
	</div>
</template>

<script>
import Stories from "@/components/homepage/LeftComponent/stories/Stories";
import Posts from "@/components/homepage/LeftComponent/posts/Posts";

export default {
	name: "LeftComponent",
	components: { Stories, Posts },
	props: ["stories"],
};
</script>

<style>
</style>