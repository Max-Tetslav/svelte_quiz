<script lang="ts">
	import RoundCard from '../../lib/ui/RoundCard/RoundCard.svelte';
	import { page } from '$app/state';
	import { artistQuestings, artsQuestions } from '$lib/stores/questions.svelte';

	const questions = page.params.category === 'arts' ? artsQuestions : artistQuestings;
</script>

<main class="content" id="content">
	{#each questions as round, index}
		<RoundCard
			roundNumber={index + 1}
			categoryType={page.params.category}
			imageId={round[0].imageNum}
			imageHref={`img/${round[0].imageNum}.jpg`}
		/>
	{/each}
</main>

<style lang="scss">
	.content {
		min-width: 280px;
		max-width: 1440px;
		margin: auto;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		height: 500px;
		overflow-y: auto;
		overflow-x: hidden;
	}
</style>
