/* eslint-disable */
import { defineStore } from 'pinia';

export interface Person {
	name: string,
	date: Object,
	tel: number,
	email: string,
}
interface State {
	persons: Person[],
};
export const useStore = defineStore('store', {
	state: (): State => ({
		persons: [],
	}),
	actions: {
		async replaceState(payload: State) {
			this.$state = payload;
		},
		async clearState() {
			this.persons = [];
			sessionStorage.clear();
		},
		getFormattedDate(object: Object) {
			const date = new Date(String(object));
			return (
				String(date.getDate()).padStart(2, '0') + '.' +
				String(date.getMonth()).padStart(2, '0') + '.' +
				String(date.getFullYear()).padStart(4, '0')
			);
		},
	},
});
