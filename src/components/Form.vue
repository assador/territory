<script setup lang="ts">
import { computed, reactive } from 'vue';
import { useStore, type Person } from '../store';

const store = useStore();

const fields = reactive({
	name: {valid: <boolean | null>null, value: <string | null>null},
	date: {valid: <boolean | null>null, value: <number | null>null},
	tel: {valid: <boolean | null>null, value: <string | null>null},
	email: {valid: <boolean | null>null, value: <string | null>null},
});
const valid = computed(() => {
	let valid = true;
	for (const key in fields) if (!fields[key as keyof Person].valid) valid = false;
	return valid;
});
const toStore = (): void => {
	store.persons.push({
		name: fields.name.value as string,
		date: new Date(String(fields.date.value)) as Object,
		tel: Number((fields.tel.value as string).slice(1)),
		email: fields.email.value as string,
	});
};
</script>

<template>
	<form @submit="toStore">
		<div class="required">
			<input
				v-model="fields.name.value"
				type="text"
				required
				:class="fields.name.valid === false ? 'invalid' : 'valid'"
				placeholder="Введите ФИО"
				@change="(e: Event) => fields.name.valid = (e.target as HTMLInputElement).validity.valid"
			/>
		</div>
		<div class="required">
			<input
				v-model="fields.date.value"
				type="text"
				required
				:class="fields.date.valid === false ? 'invalid' : 'valid'"
				placeholder="Введите дату рождения"
				@change="(e: Event) => fields.date.valid = (e.target as HTMLInputElement).validity.valid"
				@focus="(e: Event)  => (e.target as HTMLInputElement).type = 'date'"
			/>
		</div>
		<div class="required">
			<input
				v-model="fields.tel.value"
				type="tel"
				required
				:class="fields.tel.valid === false ? 'invalid' : 'valid'"
				placeholder="Введите номер телефона"
				@change="(e: Event) => fields.tel.valid = /^\+7[0-9]{10}$/.test((e.target as HTMLInputElement).value)"
			/>
		</div>
		<div class="required">
			<input
				v-model="fields.email.value"
				type="email"
				required
				:class="fields.email.valid === false ? 'invalid' : 'valid'"
				placeholder="Введите e-mail"
				@change="(e: Event) => fields.email.valid = (e.target as HTMLInputElement).validity.valid"
			/>
		</div>
		<div>
			<button type="submit" :disabled="!valid">Отправить</button>
			<button disabled class="loading" /> для примера кнопки ожидания
		</div>
	</form>
</template>

<style scoped>
form {
	display: flex;
	flex-direction: column;
	gap: 30px;
	input {
		width: 100%;
	}
	& .required {
		text-align: left;
		&::after {
			content: 'Пожалуйста, заполните поле';
			display: block;
			margin-top: 3px;
			color: rgba(79, 113, 190, 1);
			font-size: 0.8rem;
		}
	}
	button.loading {
		margin-left: 50px;
	}
}
</style>
