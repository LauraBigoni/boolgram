<template>
	<nav class="navbar">
		<div class="container">
			<img class="logo-img" :src="logo" alt="boolgram logo" />
			<div class="searchbar">
				<input
					type="text"
					name="searchbar"
					id="searchbar"
					placeholder="Cerca"
					v-model="searchText"
				/>
				<label for="searchbar"></label>
			</div>
			<div class="profile">
				<font-awesome-icon icon="fa-regular fa-heart" size="lg" />
				<font-awesome-icon icon="fa-solid fa-house" size="lg" />
				<img class="profile-img" :src="profileImage" alt="profile image" />
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: "NavBar",
	data() {
		return {
			logo: require("@/assets/logo.png"),
			profileImage: require("@/assets/profile.jpg"),
			searchText: "",
		};
	},
};
</script>

<style scoped>
.navbar {
	border-bottom: 1px solid rgb(201, 201, 201);
}

.fa-heart,
.fa-house {
	cursor: pointer;
}

.container {
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	padding: 0 16px;
}

.logo-img {
	width: 100px;
	height: auto;
}

input {
	text-align: center;
	padding: 3px 0;
	background-color: rgb(247, 247, 247);
	border: 1px solid rgb(201, 201, 201);
	border-radius: 4px;
}

.profile {
	display: flex;
	align-items: center;
	gap: 16px;
}

.profile-img {
	width: 50px;
	height: auto;
	border-radius: 50%;
}
</style>
