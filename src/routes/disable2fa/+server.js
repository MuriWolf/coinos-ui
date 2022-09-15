import { auth, post } from '$lib/utils';

export async function PUT({ request }) {
	let body = await request.json();
	let res = await post('/disable2fa', body, auth(request));

	return new Response(JSON.stringify(res));
}