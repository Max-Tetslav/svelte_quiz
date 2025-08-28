<script lang="ts">
	import RightAnswerIcon from '$lib/assets/svg/right-answer.svg';
	import WrongAnswerIcon from '$lib/assets/svg/wrong-answer.svg';
	import Modal from '../Modal/Modal.svelte';
	import { onMount } from 'svelte';
	import { playSound } from '$lib/stores/sounds.svelte';

	let { onContinueClick, question, isRightAnswer } = $props();

	const hasSounds = Boolean(localStorage.getItem('hasSounds'));

	const stars: string[] = [''];

	onMount(() => {
		if (hasSounds) {
			playSound(isRightAnswer ? 'rightAnswer' : 'wrongAnswer');
		}
	});
</script>

<Modal onModalClose={onContinueClick} buttonLabel="Продолжить">
	<img
		class="answer-status"
		src={isRightAnswer ? RightAnswerIcon : WrongAnswerIcon}
		alt={isRightAnswer ? 'right-answer-icon' : 'wrong-answer-icon'}
	/>
	<img class="answer-img" src="/img/{question.imageNum}.jpg" alt="image{question.imageNum}" />
	<p class="modal-text answer-name">{question.name}</p>
	<p class="modal-text answer-author">{question.author}</p>
	<p class="modal-text answer-year">{question.year}</p>
</Modal>

<style lang="scss">
	.answer-status {
		width: 60px;
		height: 60px;
		margin: 10px;
	}

	.answer-img {
		width: 250px;
		height: 250px;
		border-radius: 20px;
	}

	.modal-text {
		margin: 8px;
		color: #000000;
		text-align: center;
	}

	.star {
		width: 90px;
		height: 90px;
	}
</style>
