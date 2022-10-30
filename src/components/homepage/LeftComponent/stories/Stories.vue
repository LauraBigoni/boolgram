<template>
	<div class="stories">
		<Story
			v-for="(story, index) in stories"
			:key="index"
			:index="index"
			:stories="stories"
		></Story>
	</div>
</template>

<script>
import Story from "@/components/homepage/LeftComponent/stories/Story";

export default {
	name: "StoriesComponent",
	props: ["stories"],
	components: { Story },
	data() {
		return {};
	},
	methods: {},
	mounted() {},
};
</script>

<style scoped>
.stories {
	display: flex;
	justify-content: center;
	gap: 16px;
	background-color: rgb(247, 247, 247);
	border: 1px solid rgb(201, 201, 201);
	border-radius: 4px;
	margin: 24px;
	padding: 24px 16px;
}
</style>