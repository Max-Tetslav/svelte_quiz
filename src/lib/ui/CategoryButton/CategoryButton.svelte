<script>
	let { name, path } = $props();
</script>

<a href={path} class="button">{name}</a>

<style lang="scss">
	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		background: inherit;
		border-radius: 30px;
		width: 270px;
		height: 56px;
		border: 3px solid #ffffff;
		line-height: 56px;
		text-decoration: none;
		font-size: 24px;
		color: #ffffff;
		transition: all 0.3s ease-in-out;
		cursor: pointer;

		&:hover {
			border: 3px solid orange;
		}
	}
</style>
