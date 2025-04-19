import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const Form = () => import('./components/Form.vue');
const Data = () => import('./components/Data.vue');

const routes: RouteRecordRaw[] = [
	{
		path: '/form',
		name: 'Form',
		component: Form,
	}, {
		path: '/data',
		name: 'Data',
		component: Data,
	}, {
		path: '/:catchAll(.*)*',
		redirect: '/form',
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
