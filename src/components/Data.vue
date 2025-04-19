<script setup lang="ts">
import { useStore } from '../store';

const store = useStore();
</script>

<template>
	<div v-if="store.persons.length">
		<table>
			<thead>
				<tr>
					<th>ФИО</th>
					<th>Дата рождения</th>
					<th>Номер телефона</th>
					<th>Электронная почта</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(value, idx) in store.persons" :key="idx">
					<td>{{ value.name }}</td>
					<td>{{ store.getFormattedDate(value.date) }}</td>
					<td>+{{ value.tel }}</td>
					<td>{{ value.email }}</td>
				</tr>
			</tbody>
		</table>
		<button @click="store.clearState">Очистить хранилище</button>
	</div>
	<div v-else>Данных нет</div>
</template>

<style>
#app, table {
	margin-right: 0;
	margin-left: 0;
	min-width: 100%;
}
</style>
