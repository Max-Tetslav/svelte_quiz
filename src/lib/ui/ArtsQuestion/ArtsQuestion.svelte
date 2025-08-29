<script>
	import { blur } from 'svelte/transition';
	import AnswerModal from '../AnswerModal/AnswerModal.svelte';
	import { onMount } from 'svelte';
	import { playSound } from '$lib/stores/sounds.svelte';

	let { question, variants, onAnswerClick, onContinueRoundClick } = $props();

	let rightAnswer = $derived(question.imageNum);

	let hasAnswer = $state(false);
	let isRightAnswer = $state(false);

	const handleContinueClick = () => {
		hasAnswer = false;
		isRightAnswer = false;
		timerValue = Number(localStorage.getItem('timerValue'));

		onContinueRoundClick();
	};

	let hasTimerSoundPlayed = $state(false);
	let hasSounds = $state(Boolean(localStorage.getItem('hasSounds')));
	let hasTimer = $state(Boolean(localStorage.getItem('hasTimer')));
	let timerValue = $state(Number(localStorage.getItem('timerValue')));
	let timerId = $state(0);

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
	<div class="question">
		<p class="question__text">{@html question.question}</p>
		{#if hasTimer}
			<p class="question__timer">{timerValue}</p>
		{/if}
		<div class="variants__container">
			{#each variants as variant, index}
				<button
					class="variant"
					onclick={() => {
						hasAnswer = true;

						if (variants[index] === rightAnswer) isRightAnswer = true;

						onAnswerClick(index);
					}}
				>
					<img
						class="variant-img"
						src="/img/{variant}.jpg"
						id="answer{index}"
						alt="answer{index}"
					/>
				</button>
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
		padding: 0;
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
</style>
