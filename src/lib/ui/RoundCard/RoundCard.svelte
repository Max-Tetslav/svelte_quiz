<script>
	let { roundNumber, categoryType, imageId, imageHref } = $props();

	let roundResult = $state(localStorage.getItem(`${categoryType}${roundNumber}`));
</script>

<a
	class="card {roundResult ? 'played-card' : 'noplayed-card'}"
	href={categoryType + '/' + roundNumber}
>
	<p class="card-number card-info">{roundNumber}</p>

	{#if Boolean(roundResult)}
		<p class="card-score card-info">
			{roundResult}
		</p>
	{/if}

	<img class="card-img" id={imageId} src={imageHref} alt={imageId} />
</a>

<style lang="scss">
	.card {
		display: block;
		width: 110px;
		height: 110px;
		border-radius: 20px;
		overflow: hidden;
		object-position: center;
		object-fit: cover;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		position: relative;

		@media screen and (min-width: 550px) {
			width: 130px;
			height: 130px;
		}

		@media screen and (min-width: 640px) {
			width: 150px;
			height: 150px;
		}

		@media screen and (min-width: 740px) {
			width: 160px;
			height: 160px;
		}

		@media screen and (min-width: 1440px) {
			width: 210px;
			height: 210px;
		}

		&:hover {
			border: 2px solid orange;
		}
	}

	.card-img {
		width: 100%;
		height: 100%;
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}

	.card-number {
		margin: 0;
		position: absolute;
		left: 5%;
		top: 5%;
		width: 30px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		border-radius: 20px;
	}

	.card-score {
		margin: 0;
		position: absolute;
		bottom: 5%;
		right: 5%;
		width: 30px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		border-radius: 20px;
	}

	.played-card {
		border: 2px solid rgb(0, 104, 0);

		.card-number {
			background-color: rgb(0, 104, 0);
		}

		.card-score {
			background-color: rgb(0, 104, 0);
		}
	}

	.noplayed-card {
		border: 2px solid rgb(104, 0, 0);

		.card-number {
			background-color: rgb(104, 0, 0);
		}

		.card-score {
			background-color: rgb(104, 0, 0);
		}
	}
</style>
