<script lang="ts">
	import { page } from '$app/state';
	import {
		artistQuestings,
		artsQuestions,
		createArtQuestionVariants
	} from '$lib/stores/questions.svelte';
	import ArtsQuestion from '../../../lib/ui/ArtsQuestion/ArtsQuestion.svelte';
	import ArtistsQuestion from '../../../lib/ui/ArtistsQuestion/ArtistsQuestion.svelte';
	import EndroundModal from '../../../lib/ui/EndroundModal/EndroundModal.svelte';
	import { goto } from '$app/navigation';

	const roundNumber = Number(page.params.roundNumber);

	let isArtsCategory = $derived(page.params.category === 'arts');

	const questions = $derived(isArtsCategory ? artsQuestions : artistQuestings);

	let questionNumber = $state(0);
	let currentQuestion = $derived(questions[roundNumber - 1][questionNumber]);
	let rightAnswers = $state(0);

	const rightAnswer = $derived(isArtsCategory ? currentQuestion.imageNum : currentQuestion.author);

	let variants = $derived(
		createArtQuestionVariants(rightAnswer, page.params.category as 'arts' | 'artists')
	);

	const handleArtAnswerClick = (variantIndex: number) => {
		if (variants[variantIndex].toString() === currentQuestion.imageNum) {
			rightAnswers += 1;
		}
	};

	const updateQuestionNumber = () => {
		if (questionNumber < 10) {
			questionNumber += 1;
		}
	};

	const handleArtistAnswerClick = (variantIndex: number) => {
		if (variants[variantIndex].toString() === currentQuestion.author) {
			rightAnswers += 1;
		}
	};

	let isRoundOver = $derived(questionNumber === 10);

	const handleFinishRound = () => {
		goto('/' + page.params.category);
	};
</script>

<main class="content" id="content">
	{#if isRoundOver}
		<EndroundModal score={rightAnswers} onEndRoundClick={handleFinishRound} />
	{:else if isArtsCategory}
		<ArtsQuestion
			question={currentQuestion}
			{variants}
			onAnswerClick={handleArtAnswerClick}
			onContinueRoundClick={updateQuestionNumber}
		/>
	{:else}
		<ArtistsQuestion
			question={currentQuestion}
			{variants}
			onAnswerClick={handleArtistAnswerClick}
			onContinueRoundClick={updateQuestionNumber}
		/>
	{/if}
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
