<script lang="ts">
	import { onMount } from 'svelte';
	import AnswerModal from '../AnswerModal/AnswerModal.svelte';
	import { playSound } from '$lib/stores/sounds.svelte';
	import { blur } from 'svelte/transition';

	let { question, variants, onAnswerClick, onContinueRoundClick } = $props();

	let rightAnswer = $derived(question.author);

	let hasAnswer = $state(false);
	let isRightAnswer = $state(false);

	let hasTimerSoundPlayed = $state(false);
	let hasSounds = $state(Boolean(localStorage.getItem('hasSounds')));
	let hasTimer = $state(Boolean(localStorage.getItem('hasTimer')));
	let timerValue = $state(Number(localStorage.getItem('timerValue')));
	let timerId = $state(0);

	const handleContinueClick = () => {
		hasAnswer = false;
		isRightAnswer = false;
		timerValue = Number(localStorage.getItem('timerValue'));

		onContinueRoundClick();
	};

	const timer = () => {
		return setTimeout(() => {
			if (timerValue > 0) {
				timerValue -= 1;
				timer();
			}
		}, 1000);
	};

	$effect(() => {
		if (hasTimer && timerValue === 0) {
			hasAnswer = true;
		}

		if (hasTimer) {
			timerId = timer();
		}

		return () => {
			clearTimeout(timerId);
			timerId = 0;
		};
	});

	onMount(() => {
		if (hasTimer && hasSounds && !hasTimerSoundPlayed) {
			playSound('timer');
			hasTimerSoundPlayed = true;
		}
	});
</script>

{#if hasAnswer}
	<AnswerModal {question} onContinueClick={handleContinueClick} {isRightAnswer} />
{:else}
	<div class="question artist-question">
		<p class="question__text">{@html question.question}</p>
		{#if hasTimer}
			<p class="question__timer">{timerValue}</p>
		{/if}
		<img class="question-image" src="/img/{question.imageNum}.jpg" alt="art-{question.imageNum}" />
		<div class="variants__container artists_container">
			{#each variants as variant, index}
				<button
					class="artist-variant"
					id="a${index}"
					onclick={() => {
						hasAnswer = true;

						if (variants[index] === rightAnswer) isRightAnswer = true;

						onAnswerClick(index);
					}}>{variant}</button
				>
			{/each}
		</div>
	</div>
{/if}

<style lang="scss">
	.question {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex-wrap: wrap;
		gap: 40px;
		width: 100%;
		height: 500px;
		overflow-y: auto;
		overflow-x: hidden;
	}

	.question__text {
		text-align: center;
		margin: 0;
	}

	.question__timer {
		text-align: center;
		margin: 0;
	}

	.variants__container {
		min-width: 360px;
		height: 350px;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 5px;
		overflow-y: auto;
		overflow-x: hidden;
	}

	.variant {
		width: 170px;
		height: 170px;
		border: 2px solid white;
		border-radius: 20px;
		overflow: hidden;
		object-position: center;
		object-fit: cover;
		transition: all 0.3s ease-in-out;

		@media screen and (min-width: 950px) {
			width: 210px;
			height: 210px;
		}

		@media screen and (min-width: 1200px) {
			width: 250px;
			height: 250px;
		}

		@media screen and (min-width: 1440px) {
			width: 290px;
			height: 290px;
		}

		&:hover {
			border: 2px solid orange;
		}
	}

	.variant-img {
		width: 100%;
		height: 100%;
	}

	.question-image {
		width: 280px;
		height: 280px;
		border: 2px solid #ffffff;
		border-radius: 20px;
	}

	.artists_container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		height: 130px;
	}

	.artist-question {
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		gap: 0px;
	}

	.artist-variant {
		margin: 0;
		background-color: inherit;
		border: none;
		width: 45%;
		height: 45%;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 30px;
		font-size: 1rem;
		text-align: center;
		border-bottom: 2px solid #ffffff;
		transition: all 0.3s ease-in-out;
		cursor: pointer;

		&:hover {
			border-bottom: 2px solid orange;
		}
	}
</style>
