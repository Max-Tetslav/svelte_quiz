<script lang="ts">
	import SettingsButton from '../SettingsButton/SettingsButton.svelte';

	import { page } from '$app/state';
	import ReturnButton from '../ReturnButton/ReturnButton.svelte';
	import { routes, type Pages } from '$lib/utils/routes';

	let isSettingsPage = $derived(Boolean(page.url.pathname.includes('settings')));

	let isHomePage = $derived(page.url.pathname === '/');
	let currentPage: Pages = $derived(
		(() => {
			if (isHomePage) return 'home';
			if (isSettingsPage) return 'settings';

			return page.params.category as Extract<Pages, 'arts' | 'artists'>;
		})()
	);
</script>

<header class="header" id="header">
	{#if !isHomePage}
		<ReturnButton />
	{/if}

	{#if !isHomePage}
		<h2>
			{routes[currentPage].title}
		</h2>
	{/if}

	{#if isHomePage}
		<SettingsButton />
	{/if}
</header>

<style lang="scss">
	.header {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		height: 5rem;
		width: 100vw;
		padding: 0 1rem;
	}
</style>
