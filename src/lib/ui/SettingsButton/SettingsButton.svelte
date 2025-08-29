<script>
	import { goto } from "$app/navigation";

	let {} = $props();

  const goToSettings = () => {
    goto('/settings');
  }
</script>

<button onclick={goToSettings} class="button" role="link">
	<img class="settingsIcon" src="/svg/settings.svg" alt="settings-icon" />
</button>

<svelte:head>
	<link rel="preload" as="image" href="/svg/settings.svg" />
</svelte:head>

<style lang="scss">
	.button {
		width: 4rem;
		height: 4rem;
		padding: 1rem;
    border: none;
		display: inline-block;
		background: inherit;
		text-decoration: none;
		position: absolute;
		right: 0;
		cursor: pointer;
	}

  .settingsIcon {
    width: 2rem;
		height: 2rem;
    transition: all ease 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
</style>
