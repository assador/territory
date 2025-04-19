<script setup lang="ts">
</script>

<template>
	<div class="switch">
		<a href="/form" :class="$route.name === 'Form' ? 'active' : ''">Форма</a>
		<a href="/data" :class="$route.name === 'Data' ? 'active' : ''">Данные</a>
	</div>
</template>

<style scoped>
.switch {
	display: flex;
	margin: 0 auto 50px auto;
	justify-content: center;
	border-bottom: 2px solid rgba(0, 0, 0, 0.05);
	> a {
		padding: 5px 40px;
		margin-bottom: -3px;
		border-bottom-width: 3px;
		border-bottom-style: solid;
		border-bottom-color: rgba(0, 0, 0, 0);
		color: rgba(0, 0, 0, 0.5);
		&:hover, &.active {
			border-bottom-color: rgb(97, 181, 87);
			color: rgba(0, 0, 0, 1);
		}
	}
}
</style>
