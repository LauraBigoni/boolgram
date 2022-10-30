<template>
	<div class="profile">
		<div class="profile-card">
			<img class="profile-img" :src="user.profileImage" alt="user-image" />
			<div>
				<h4 class="user-nick">{{ user.nick }}</h4>
				<h5 class="user-name">{{ user.name }}</h5>
			</div>
			<a href="#">Vedi</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "ProfileComponent",
	props: ["user"],
};
</script>

<style scoped>
.profile {
	padding: 10px 0;
}

.profile-card {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.user-nick {
	font-weight: 600;
}

a {
	text-decoration: none;
	color: inherit;
}

a:focus,
a:active {
	font-weight: 600;
}
</style>