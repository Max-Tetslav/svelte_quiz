<script>
	let { children, onModalClose, buttonLabel } = $props();
</script>

<div class="modal-overlay">
	<div class="modal-content">
		{@render children()}
		<button class="modal-text modal-btn" onclick={onModalClose}>{buttonLabel}</button>
	</div>
</div>

<style lang="scss">
	.modal-overlay {
		position: absolute;
		top: 0;
		z-index: 11;
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba($color: #000000, $alpha: 0.7);
	}

	.modal-content {
		width: 300px;
		height: 550px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		background-color: #ffffff;
		border: 2px solid #000000;
		border-radius: 50px;
		margin: 0;
	}

	.modal-text {
		margin: 8px;
		font-size: 1rem;
		color: #000000;
		text-align: center;
	}

	.modal-btn {
		display: flex;
		align-items: center;
		justify-content: center;
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
</style>
