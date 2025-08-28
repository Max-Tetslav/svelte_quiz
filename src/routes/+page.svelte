<script lang="ts">
	import { onMount } from 'svelte';
	import AppLogo from '../lib/ui/AppLogo/AppLogo.svelte';
	import CategoryButton from '../lib/ui/CategoryButton/CategoryButton.svelte';
	import { preloadAudio } from '$lib/stores/sounds.svelte';

	onMount(() => {
		preloadAudio();
	});
</script>

<main class="content" id="content">
	<AppLogo />
	<CategoryButton name="Картины" path="/arts" />
	<CategoryButton name="Художники" path="/artists" />
</main>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3rem;
		width: 100vw;
	}
</style>
