<template>
	<div id="app">
		<Nav :userImage="user.profileImage"></Nav>
		<main class="components container">
			<LeftComponent :stories="stories"></LeftComponent>
			<RightComponent :stories="stories" :user="user"></RightComponent>
		</main>
	</div>
</template>

<script>
import Nav from "@/components/Nav";
import RightComponent from "@/components/homepage/RightComponent/RightComponent";
import LeftComponent from "@/components/homepage/LeftComponent/LeftComponent";
import axios from "axios";

export default {
	name: "App",
	components: { Nav, RightComponent, LeftComponent },
	data() {
		return {
			stories: [],
			user: {
				profileImage: require("@/assets/profile.jpg"),
				name: "Laura Bigoni",
				nick: "LauraWebDev",
			},
		};
	},
	methods: {
		async getStories() {
			await axios
				.get("https://flynn.boolean.careers/exercises/api/boolgram/profiles")
				.then((res) => (this.stories = res.data));

			console.log(this.stories);
		},
	},
	mounted() {
		this.getStories();
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap");

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: "Montserrat", sans-serif;
	font-weight: 400;
}

/* width */
::-webkit-scrollbar {
	width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
	background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
	background: rgb(214, 214, 214);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	background: #555;
}

#app {
	height: 100vh;
}

.container {
	max-width: 1200px;
	margin: 0 auto;
}

.components {
	display: flex;
}

.components > :first-child {
	flex: 2;
}

.components > :nth-child(2) {
	flex: 1;
}

.profile-img {
	width: 50px;
	height: 50px;
	border-radius: 50%;
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
