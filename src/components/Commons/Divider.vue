<template>
    <div :class="color">
        
    </div>
</template>

<script setup>
defineProps({
	color: {
		title: String,
        default: 'dark'
	},
});

</script>

<style scoped>
.dark{
    width: 100%;
    height: 1px;
    background-color: #7e7e7e;
    margin: 1rem 0;
}

.light{
    width: 100%;
    height: 1px;
    background-color: #ffffff;
    margin: 1rem 0;
}
</style>