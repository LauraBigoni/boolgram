<template>
	<div class="story">
		<img
			class="profile-img"
			:src="stories[index].profile_picture"
			alt="story image"
		/>
		<h4 class="user-nick">{{ stories[index].profile_name }}</h4>
	</div>
</template>

<script>
export default {
	name: "StoryComponent",
	props: ["stories", "index"],
};
</script>

<style scoped>
.story {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.profile-img {
	cursor: pointer;
	padding: 1px;
	border: 3px solid rgb(173, 76, 64);
}

.user-nick {
	padding-top: 8px;
	white-space: nowrap;
	width: 80px;
	overflow: hidden;
	text-overflow: ellipsis;
	font-weight: 600;
}
</style>