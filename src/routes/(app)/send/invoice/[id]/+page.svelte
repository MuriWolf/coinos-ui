<script>
  import { onDestroy, onMount } from "svelte";
  import { t } from "$lib/translations";
  import { goto, invalidateAll } from "$app/navigation";
  import { pin } from "$lib/store";
  import { enhance } from "$app/forms";
  import Avatar from "$comp/Avatar.svelte";
  import Icon from "$comp/Icon.svelte";
  import Numpad from "$comp/Numpad.svelte";
  import Spinner from "$comp/Spinner.svelte";
  import { page } from "$app/stores";
  import { post, back, f, fiat as toFiat, s, sats, focus } from "$lib/utils";
  export let data;
  export let form;

  let { address, hash, payreq, recipient, tip, rates, user } = data;
  let { currency } = user;

  $: reload(data);
  let reload = (data) => {
    ({ address, hash, payreq, recipient, tip, rates, user } = data);
    ({ currency } = user);
  };

  $: rate = data.rate * (rates[user.currency] / rates[data.currency]);

  let amount = form?.amount || data.amount;
  let a,
    af,
    amountFiat = amount * (rate / sats),
    fiat = !amount;

  let setAmount = () => {
    amount = a;
    amountFiat = af;
  };

  let loading;
  let submit = () => (loading = true);

  let external = async () => {
    let invoice = { type: "lightning", amount, currency };
    let { id } = await post(`/${recipient.username}/invoice`, {
      invoice,
      user: { username: recipient.username },
    });

    goto(`/${recipient.username}/invoice/${id}?options=true`, {
      invalidateAll: true,
    });
  };

  $: update(form);
  let update = () => {
    if (form?.message.includes("pin")) $pin = undefined;
    loading = false;
  };

  // onMount(async () => {
  // 	if (browser && window.NDEFReader && user.nfc) {
  // 		try {
  // 			let ndef = new NDEFReader();
  // 			await ndef.scan();
  //
  // 			ndef.addEventListener('readingerror', (e) => {
  // 				console.log('nfc error', e);
  // 			});
  //
  // 			ndef.addEventListener('reading', ({ message, serialNumber }) => {
  // 				console.log(message, serialNumber);
  // 			});
  // 		} catch (e) {
  // 			console.log('NFC error', e);
  // 		}
  // 	}
  // });
</script>

<button class="ml-5 md:ml-20 mt-5 md:mt-10 hover:opacity-80" on:click={back}>
  <Icon icon="arrow-left" style="w-10" />
</button>

{#if form?.message}
  <div class="text-red-600 text-center">
    {form.message}
  </div>
{/if}

<div class="container px-4 max-w-xl mx-auto">
  {#if amount}
    <div class="text-center mb-8">
      <h1 class="text-xl md:text-2xl text-secondary mb-2">
        {$t("payments.send")}
      </h1>
      <h2 class="text-2xl md:text-3xl font-semibold">
        {f(toFiat(amount, rate), currency)}
        {#if tip}
          <span class="text-lg">
            + {f(toFiat(tip, rate), currency)}
          </span>
        {/if}
      </h2>
      <h3 class="text-secondary md:text-lg mb-6 mt-1">
        ⚡️{s(amount)}

        {#if tip}
          <span class="text-lg">
            + ⚡️{s(tip)}
          </span>
        {/if}
      </h3>

      <h1 class="text-xl md:text-2xl text-secondary mb-2">
        {$t("payments.to")}
      </h1>

      <div class="flex p-1 gap-2 justify-center">
        {#if recipient.username.includes("@classic")}
          <img
            src="/images/classic.png"
            class="w-24 border-4 border-transparent mr-1"
            alt="Bitcoin"
          />
        {:else}
          <Avatar user={recipient} size={"20"} />
        {/if}
        <p class="text-4xl break-words my-auto">
          {recipient.username.replace("@classic", "")}
        </p>
      </div>
    </div>
  {:else}
    <Numpad
      bind:amount={a}
      bind:amountFiat={af}
      {currency}
      bind:fiat
      bind:rate
    />
  {/if}

  <form method="POST" use:enhance on:submit={submit}>
    <input name="address" value={address} type="hidden" />
    <input name="amount" value={amount} type="hidden" />
    <input name="payreq" value={payreq} type="hidden" />
    <input name="username" value={recipient.username} type="hidden" />
    <input name="pin" value={$pin} type="hidden" />

    <div class="flex w-full">
      {#if amount}
        <button
          use:focus
          type="submit"
          class="opacity-100 hover:opacity-80'} rounded-2xl border py-3 font-bold mx-auto mt-2 bg-black text-white px-4 w-24"
        >
          {#if loading}
            <Spinner />
          {:else}
            {$t("payments.send")}
          {/if}
        </button>
      {:else}
        <button
          type="button"
          class="opacity-100 hover:opacity-80'} rounded-2xl border py-3 font-bold mx-auto mt-2 bg-black text-white px-4 w-24"
          on:click={setAmount}
        >
          {$t("payments.next")}
        </button>
      {/if}
    </div>
  </form>
  <div class="flex my-10">
    <button class="mx-auto" on:click={external}
      >{$t("payments.moreOptions")}</button
    >
  </div>
</div>
