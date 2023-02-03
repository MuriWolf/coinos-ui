import { get } from 'svelte/store';
import {
	events as $events,
	invoice,
	request,
	newPayment,
	last,
	rate,
	payments,
	user
} from '$lib/store';
import { success, sat } from '$lib/utils';
import { PUBLIC_SOCKET } from '$env/static/public';
import { invalidate } from '$app/navigation';
import { browser } from '$app/environment';

let socket, token;
let le = browser && localStorage.getItem('events');
let events = le && le !== 'undefined' ? JSON.parse(le) : {};
let q = Object.keys(events);

export const auth = () => token && send('login', token) && send('heartbeat');

export const send = (type, data) => {
	socket?.readyState === 1 && socket.send(JSON.stringify({ type, data }));
	return true;
};

export const messages = (data) => ({
	id() {
		last.set(Date.now());
	},

	invoice() {
		invoice.set(data);
	},

	event() {
		data.seen = Math.round(Date.now() / 1000);
		events[data.id] = data;
		q.push(data.id);
		$events.set(events);
		while (q.length > 10000) delete events[q.shift()];
		localStorage.setItem(
			'events',
			JSON.stringify(q.slice(-100).reduce((a, b) => (a = { ...a, [b]: events[b] }), {}))
		);
	},

	rate() {
		rate.set(data);
	},

	request() {
		request.set(data);
		invalidate('app:invoice');
	},

	async payment() {
		let { amount, invoice } = data;
		invalidate('app:invoice');

		let p = get(payments);
		let i = p.findIndex((p) => p.id === data.id);

		if (~i) {
			p[i] = data;
			payments.set(p);
		} else newPayment.set(true);

		invalidate((url) => url.pathname === '/payments');

		if (amount > 0) {
			success(`${data.confirmed ? 'Received' : 'Detected'} ${sat(amount)}!`);
		} else {
			success(`Sent ${sat(amount)}!`);
		}
	},

	connected: auth
});

const initialReconnectDelay = 1000;
const maxReconnectDelay = 16000;

let currentReconnectDelay = initialReconnectDelay;

export function connect(t) {
	token = t;

	if (socket) return auth();

	socket = new WebSocket(PUBLIC_SOCKET);
	socket.addEventListener('open', onWebsocketOpen);
	socket.addEventListener('close', onWebsocketClose);
	socket.addEventListener('message', onWebsocketMessage);
}

export function close() {
	if (socket) socket.close();
}

function onWebsocketMessage(msg) {
	let { type, data } = JSON.parse(msg.data);
	messages(data)[type] && messages(data)[type]();
}

function onWebsocketOpen() {
	currentReconnectDelay = initialReconnectDelay;
}

function onWebsocketClose() {
	socket = null;
	setTimeout(() => {
		reconnectToWebsocket();
	}, currentReconnectDelay + Math.floor(Math.random() * 3000));
}

function reconnectToWebsocket() {
	if (currentReconnectDelay < maxReconnectDelay) {
		currentReconnectDelay *= 2;
	}
	connect(token);
}
