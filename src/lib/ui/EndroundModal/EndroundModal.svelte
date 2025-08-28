<script lang="ts">
	import { onMount } from 'svelte';
	import PooIcon from '$lib/assets/svg/poo.svg';
	import StarIcon from '$lib/assets/svg/star.svg';

	let { score, onEndRoundClick } = $props();

	import Modal from '../Modal/Modal.svelte';
	import { page } from '$app/state';
	import { playSound } from '$lib/stores/sounds.svelte';

	let isSuccessfulRound = $state(score > 5);
	const hasSounds = Boolean(localStorage.getItem('hasSounds'));

	const getResultText = () => {
		if (score === 10) return 'Идеально!';
		if (score > 7) return 'Отлично!';
		if (score > 5) return 'Молодец!';

		return 'Попробуйте еще раз!';
	};

	const stars: string[] = (() => {
		if (score === 10) return new Array(3);
		if (score > 7) return new Array(2);
		if (score > 5) return new Array(1);

		return new Array(0);
	})();

	onMount(() => {
		if (score > 5) {
			localStorage.setItem(`${page.params.category}${page.params.roundNumber}`, String(score));
		}

		if (hasSounds) {
			playSound(isSuccessfulRound ? 'successRound' : 'failRound');
		}
	});
</script>

<Modal onModalClose={onEndRoundClick} buttonLabel="Далее">
	<p class="modal-text answer-name">
		{getResultText()}
	</p>
	<div class="stars-container">
		{#if stars.length}
			{#each stars as star, index (index)}
				<img class="star" src={StarIcon} alt="star{index}" />
			{/each}
		{:else}
			<img class="star" src={PooIcon} alt="poo" />
		{/if}
	</div>
	<p class="modal-text answer-author">Ваш результат: {score}</p>
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

	.modal-btn {
		width: 200px;
		height: 50px;
		text-decoration: none;
		text-align: center;
		line-height: 50px;
		color: #ffffff;
		border-radius: 20px;
		background-color: rgba($color: #000000, $alpha: 0.9);
		cursor: pointer;
	}

	.star {
		width: 90px;
		height: 90px;
	}
</style>
