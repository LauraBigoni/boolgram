<template>
	<div class="posts">
		<Post
			v-for="(story, index) in posts"
			:key="index"
			:index="index"
			:posts="posts"
		></Post>
	</div>
</template>

<script>
import Post from "@/components/homepage/LeftComponent/posts/Post";
import axios from "axios";

export default {
	name: "PostsComponent",
	components: { Post },
	data() {
		return {
			posts: [],
		};
	},
	methods: {
		async getPosts() {
			await axios
				.get("https://flynn.boolean.careers/exercises/api/boolgram/posts")
				.then((res) => (this.posts = res.data));
			console.log(this.posts);
		},
	},
	mounted() {
		this.getPosts();
	},
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