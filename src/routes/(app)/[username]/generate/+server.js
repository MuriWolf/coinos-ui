import { auth, post } from '$lib/utils';
import { error, json } from '@sveltejs/kit';

export async function POST({ cookies, request }) {
	try {
		let body = await request.json();
		let user = await post(`/user`, body, auth(cookies));
		return json(user);
	} catch (e) {
		throw error(500, e.message);
	}
}