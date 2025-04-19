<script setup lang="ts">
import { onMounted } from 'vue';
import { useStore } from './store';
import Switch from './components/Switch.vue';

const store = useStore();

onMounted(() => {
	store.$subscribe((_, state) => {
		sessionStorage.setItem('state', JSON.stringify(state));
	});
	if (sessionStorage.getItem('state')) {
		store.replaceState(JSON.parse(sessionStorage.getItem('state') as string));
	} else {
		sessionStorage.setItem('state', JSON.stringify(store.$state));
	}
});
</script>

<template>
	<Switch />
	<router-view />
</template>
