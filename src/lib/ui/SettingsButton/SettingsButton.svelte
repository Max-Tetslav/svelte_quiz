<script>
	import settingsLogo from '$lib/assets/svg/settings.svg';
	import { blur } from 'svelte/transition';

	let {} = $props();
</script>

<a href="/settings" class="button" transition:blur>
	<img src={settingsLogo} alt="settings logo" class="logo" />
</a>

<svelte:head>
	<link rel="preload" as="image" href={settingsLogo} />
</svelte:head>

<style lang="scss">
	.button {
		width: 4rem;
		height: 4rem;
		padding: 1rem;
		display: inline-block;
		background: inherit;
		text-decoration: none;
		position: absolute;
		right: 0;
		cursor: pointer;
	}

	.logo {
		width: 2rem;
		height: 2rem;
	}
</style>
