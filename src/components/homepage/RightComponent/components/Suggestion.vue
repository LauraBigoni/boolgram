<template>
	<div class="suggestion">
		<div class="for-you">
			<p>Suggerimenti per te</p>
			<span>Mostra tutti</span>
		</div>
		<div class="suggestion-box">
			<!-- fare chiamata api sostituire dati fake -->
			<div class="scroll">
				<div
					class="suggestion-card"
					v-for="(sugg, index) in stories"
					:key="index"
				>
					<div>
						<img
							class="profile-img"
							:src="sugg.profile_picture"
							alt="user-image"
						/>
						<h4 class="user-nick">{{ sugg.profile_name }}</h4>
					</div>
					<a href="#">Segui</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SuggestionComponent",
	props: ["stories"],
};
</script>

<style scoped>
.suggestion {
	padding: 0 16px;
}

.profile-img {
	cursor: pointer;
}

.for-you {
	font-size: 14px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.for-you p {
	color: rgb(143, 143, 143);
	font-weight: 600;
}

.for-you span {
	font-weight: 600;
	cursor: pointer;
}

.suggestion-box {
	padding: 24px 0;
}

.suggestion-card {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 8px 0;
}

.suggestion-card > div {
	display: flex;
	align-items: center;
}

.user-nick {
	padding-left: 16px;
	font-weight: 600;
}
</style>