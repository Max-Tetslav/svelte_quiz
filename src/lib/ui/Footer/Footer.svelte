<footer class="footer" id="footer">
  <a href='https://github.com/Max-Tetslav/svelte_quiz' target="_blank">
    <img class="githubLogo" src="/svg/github.svg" alt="github-icon" width="40" height="40">
  </a>
</footer>

<style lang="scss">
	.footer {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 5rem;
		width: 100vw;
		padding: 0 1rem;
	}

	.githubLogo {
		text-decoration: none;
		color: #ffffff;
    transition: all ease 0.3s;

    &:hover {
      transform: scale(1.1);
    }
	}
</style>
