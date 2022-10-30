<template>
	<div class="post">
		<div class="user-post">
			<div class="user-post-info">
				<img
					class="profile-img"
					:src="posts[index].profile_picture"
					alt="user image"
				/>
				<h4 class="user-nick">{{ posts[index].profile_name }}</h4>
			</div>
			<div class="dots">
				<div class="dot" v-for="(dot, index) in 3" :key="index"></div>
			</div>
		</div>
		<img class="post-img" :src="posts[index].post_image" alt="post image" />
		<div class="post-info">
			<div class="actions">
				<font-awesome-icon icon="fa-regular fa-heart" size="lg" />
				<font-awesome-icon icon="fa-regular fa-comment" size="lg" />
			</div>
			<div class="like-counter">
				<img
					class="like-counter-img"
					:src="posts[index].likes[0].profile_picture"
					alt="like counter img"
				/>
				<p class="user-like" v-if="posts[index].likes.length >= 2">
					Piace a <span>{{ posts[index].likes[0].username }}</span> e
					<span>altri {{ posts[index].likes.length - 1 }}</span>
				</p>
				<p class="user-like" v-if="posts[index].likes.length == 1">
					Piace a <span>{{ posts[index].likes[0].username }}</span>
				</p>
				<p class="user-like" v-if="posts[index].likes.length == 0">
					Piace a <span>0 Persone</span>
				</p>
			</div>
			<div class="comment-box">
				<h5
					v-if="posts[index].comments.length > 1"
					@click="showAllComments(posts[index])"
				>
					Mostra tutti e {{ posts[index].comments.length }} commenti
				</h5>
				<h5
					v-if="posts[index].comments.length == 1"
					@click="showAllComments(posts[index])"
				>
					Mostra i commenti
				</h5>
				<h5
					v-if="posts[index].comments.length == 0"
					@click="showAllComments(posts[index])"
				>
					Nessun commento
				</h5>
				<div
					class="comment"
					v-for="(comment, index) in posts[index].comments.slice(0, this.slice)"
					:key="index"
				>
					<p>
						{{ comment.username }} <span> {{ comment.text }}</span>
					</p>
				</div>
			</div>
			<div class="post-created-at">
				<p class="time">
					{{ moment(posts[index].date.date).fromNow() }}
				</p>
			</div>
		</div>
		<div class="add-comment">
			<h3>Aggiungi commento</h3>
			<a href="#">Pubblica</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "PostComponent",
	props: ["posts", "index"],
	data() {
		return {
			allComments: [],
			slice: 2,
			isClicked: false,
		};
	},
	methods: {
		showAllComments(post) {
			this.isClicked = !this.isClicked;
			if (this.isClicked) {
				this.slice = post.comments.length;
				post.comments.splice(2, 0);
			} else this.slice = 2;
		},
	},
	computed: {},
	mounted() {},
};
</script>

<style scoped>
.post {
	background-color: rgb(247, 247, 247);
	border: 1px solid rgb(201, 201, 201);
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.profile-img {
	padding: 1px;
	border: 3px solid rgb(173, 76, 64);
}

.user-post {
	height: 60px;
	width: 100%;
	z-index: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
}

.user-post-info {
	display: flex;
	align-items: center;
}

.user-nick {
	font-weight: 600;
	padding: 0 16px;
}

.post-img {
	width: 100%;
	height: 400px;
	object-fit: cover;
	object-position: center center;
}

.dots {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2px;
	cursor: pointer;
	padding: 8px 0 8px 8px;
}

.dot {
	z-index: 1;
	width: 4px;
	height: 4px;
	border-radius: 50%;
	background-color: #555555;
}

.post-info {
	width: 100%;
	padding: 16px;
}

.actions {
	display: flex;
	gap: 16px;
}

.actions > * {
	cursor: pointer;
}

.like-counter {
	display: flex;
	align-items: center;
	padding: 8px 0;
}

.like-counter p {
	font-size: 14px;
	padding: 0 8px;
}

.like-counter span {
	font-weight: 600;
}

.like-counter-img {
	width: 20px;
	height: 20px;
	border-radius: 50%;
}

.comment-box {
	padding: 8px 0;
}

.comment-box h5 {
	font-weight: 600;
	color: rgb(143, 143, 157);
	padding-bottom: 8px;
	cursor: pointer;
	width: max-content;
}

.comment-box p {
	font-weight: 600;
	font-size: 12px;
}

.post-created-at {
	font-size: 14px;
	padding: 8px 0;
}

.add-comment {
	font-size: 14px;
	padding: 8px 16px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-top: 1px solid #dedede;
	color: rgb(143, 143, 157);
}

.add-comment a {
	color: dodgerblue;
	font-weight: 600;
}
</style>