<template>
	<div class="posts">
		<Post
			v-for="(story, index) in posts.slice(0, this.slice)"
			:key="index"
			:index="index"
			:posts="posts"
		></Post>
		<a
			class="btn-more"
			@click="showMorePosts()"
			v-if="this.slice < this.posts.length"
			>Mostra Altri Post</a
		>
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
			slice: 2,
		};
	},
	methods: {
		async getPosts() {
			await axios
				.get("https://flynn.boolean.careers/exercises/api/boolgram/posts")
				.then((res) => (this.posts = res.data));
			console.log(this.posts);
		},
		showMorePosts() {
			this.slice += 2;
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

.btn-more {
	padding: 10px 15px;
	background-color: dodgerblue;
	width: max-content;
	color: #fff;
	border-radius: 8px;
	align-self: center;
	cursor: pointer;
}
</style>