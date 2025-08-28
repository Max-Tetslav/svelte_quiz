<script lang="ts">
	import Footer from '$lib/ui/Footer/Footer.svelte';
	import Header from '$lib/ui/Header/Header.svelte';

	let { children } = $props();
</script>

<Header />
{@render children?.()}
<Footer />

<svelte:head>
	<link rel="icon" href="/favicon.svg" />
	<link rel="preload" as="image" href="/background.jpg" />
</svelte:head>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

	:global(*),
	:global(::after),
	:global(::after) {
		margin: 0;
		box-sizing: border-box;
		color: #ffffff;
		font-family: 'Nunito', sans-serif;
	}

	:global(body) {
		display: grid;
		justify-content: space-between;
		background-size: cover;
		background-image:
			linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/background.jpg');
		background-position: center;
		background-repeat: no-repeat;
		min-height: 100vh;
		margin: 0;
		overscroll-behavior: none;
	}

	:global(input::-webkit-outer-spin-button),
	:global(input::-webkit-inner-spin-button) {
		-webkit-appearance: none;
		margin: 0;
	}

	:global(input[type='number']) {
		-moz-appearance: textfield;
	}

	:global(.app) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
