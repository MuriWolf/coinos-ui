import { error, redirect } from '@sveltejs/kit';
import { auth, get, post } from '$lib/utils';
import Qr from 'qrcode-base64';

export let load = async ({ params: { redeemcode }, url }) => {
	let payment = await get(`/payment/${redeemcode}`);

	let src = Qr.drawImg(url.href, { size: 300 });
	return { payment, src };
};

export const actions = {
	default: async ({ cookies, locals, params, request }) => {
		let { user } = locals;

		if (user) {
			await post('/redeem', params, auth(cookies));
			throw redirect(307, `/${user.username}/transactions`);
		}

		throw redirect(307, '/login');
	}
};
