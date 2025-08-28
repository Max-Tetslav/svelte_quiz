<script>
	import { goto } from '$app/navigation';
	import { navigating } from '$app/state';
	import arrowBack from '$lib/assets/svg/arrow-back.svg';
	// import { getPreviousPath, goBack } from '$lib/stores/navigation.svelte';
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';

	let {} = $props();

	// getPreviousPath();
</script>

<a href="/settings" class="button" transition:blur onclick={() => history.back()}>
	<img src={arrowBack} alt="settings logo" class="logo" />
</a>

<svelte:head>
	<link rel="preload" as="image" href={arrowBack} />
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
		left: 0;
		cursor: pointer;
	}
</style>
