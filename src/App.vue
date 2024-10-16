<template>
	<div :class="settingsStore().mode">
		<v-btn @click="changeMode()">{{ settingsStore().mode === 'dark' ? '🌚' : '🌞' }}</v-btn>

		<Header />

		<p class="title">Frameworks</p>
		<div v-for="item in elementsStore().frameworks">
			<Frameworks :item="item" />
		</div>
		<Divider color="light" />
		<p class="title">Libraries</p>
		<div v-for="item in elementsStore().libraries">
			<Libraries :item="item" />
		</div>
	</div>
</template>

<script setup>
import { settingsStore } from "../stores/settings";
import { elementsStore } from "../stores/elements";
import Header from "./components/Header.vue";
import Frameworks from "./components/Cards/Frameworks.vue";
import Libraries from "./components/Cards/Libraries.vue";
import Divider from "./components/Commons/Divider.vue";

defineProps({});


function changeMode() {
	if (settingsStore().modeValue) {
		settingsStore().setMode('dark');
		settingsStore().setModeValue(false);
	} else {
		settingsStore().setMode('light');
		settingsStore().setModeValue(true);
	}
}
</script>

<style scoped>
.dark {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: "Montserrat", sans-serif;
	background-color: black;

	.title {
		font-size: 1.5rem;
		font-weight: 400;
		margin: 1rem 0;
		color: white;
	}
}

.light {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: "Montserrat", sans-serif;
	background-color: rgb(209, 209, 209);

	.title {
		font-size: 1.5rem;
		font-weight: 400;
		margin: 1rem 0;
		color: rgb(42, 42, 42);
	}
}
</style>
