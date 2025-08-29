<script>
	import arrowBack from '$lib/assets/svg/arrow-back.svg';
	import { blur } from 'svelte/transition';


  const goBack = () => {
    history.back()
  }

</script>

<button class="button" transition:blur onclick={goBack}>
	<img src={arrowBack} alt="settings logo" class="logo" />
</button>

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
    border: none;
		left: 0;
		cursor: pointer;
	}
</style>
