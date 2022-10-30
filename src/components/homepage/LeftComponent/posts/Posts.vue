<template>
	<div class="posts">
		<Post v-for="(story, index) in 5" :key="index"></Post>
	</div>
</template>

<script>
import Post from "@/components/homepage/LeftComponent/posts/Post";

export default {
	name: "PostsComponent",
	components: { Post },
};
</script>

<style scoped>
.posts {
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 24px;
}

.posts > * {
	margin-bottom: 16px;
}
</style>