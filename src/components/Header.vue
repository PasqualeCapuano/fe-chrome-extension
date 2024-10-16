<template>
	<div :class="settingsStore().mode">
		<div class="header">
			<p>{{ settingsStore().appName }}</p>
		</div>
		<div>
			<p class="subtitle">{{ settingsStore().appSubtitle }}</p>
		</div>
	</div>
</template>

<script setup>
import { settingsStore } from "../../stores/settings.js";

defineProps({
	mode: {
		type: String,
		default: "dark",
	},
});
</script>

<style scoped>
.dark{
    .header {
	color: white;
	padding: 10px;
	text-align: center;
	width: 100%;
	font-size: 1.5rem;
}
.subtitle {
	color: white;
	text-align: center;
}
}

.light{
    .header {
	color: rgb(57, 57, 57);
	padding: 10px;
	text-align: center;
	width: 100%;
	font-size: 1.5rem;
}
.subtitle {
	color: rgb(57, 57, 57);
	text-align: center;
}

}
</style>
