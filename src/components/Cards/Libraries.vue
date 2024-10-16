<template>
	<div class="card">
    <div class="d-flex justify-space-between align-center">
        <div>
			<p class="title">{{ item.title }}</p>
			<p class="subtitle">{{ item.subtitle }}</p>
		</div>
		<div>
			<v-btn @click="goTo(item.link)">
				<Icon :icon="item.icon" />
			</v-btn>
		</div>
    </div>
		<v-divider></v-divider>
		<p class="description">{{ item.description }}</p>
	</div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
defineProps({
	item: {
		title: String,
		description: String,
	},
});

const goTo = (x) => {
	window.open(x, "_blank");
};
</script>

<style scoped>
.card {
    width: 300px;
	margin: 10px;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	transition: all 0.3s;
	background-color: white;

	.title {
		font-size: 1.5rem;
		font-weight: 500;
		margin: 0;
	}
	.subtitle {
		font-size: 1rem;
		font-weight: 400;
		margin: 0;
		color: #666666;
	}
	.description {
		font-size: 1rem;
		font-weight: 400;
		margin: 0;
	}
}
</style>
