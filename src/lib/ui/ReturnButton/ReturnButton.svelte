<script>
	import { blur } from 'svelte/transition';

  const goBack = () => {
    history.back()
  }
</script>

<button class="button" in:blur onclick={goBack} role="link">
	<img class="returnIcon" src="/svg/arrow-back.svg" alt="return-icon" />
</button>

<svelte:head>
	<link rel="preload" as="image" href="/svg/arrow-back.svg" />
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

  .returnIcon {
    width: 2rem;
		height: 2rem;
    transition: all ease 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
</style>
