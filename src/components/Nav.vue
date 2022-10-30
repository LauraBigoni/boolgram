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
				<img class="profile-img" :src="userImage" alt="profile image" />
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: "NavBar",
	props: ["userImage"],
	data() {
		return {
			logo: require("@/assets/logo.png"),
			searchText: "",
		};
	},
};
</script>

<style scoped>
.navbar {
	border-bottom: 1px solid rgb(201, 201, 201);
}

.container {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	padding: 0 16px;
}

.fa-heart,
.fa-house {
	cursor: pointer;
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

</style>
