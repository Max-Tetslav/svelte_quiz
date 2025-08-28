<script>
	let timerValue = $state(Number(localStorage.getItem('timerValue')) || 15);
	let volumeValue = $state(Number(localStorage.getItem('volumeValue')) || 50);

	let hasTimer = $state(Boolean(localStorage.getItem('hasTimer')));
	let hasSounds = $state(Boolean(localStorage.getItem('hasSounds')));

	const handleChangeTime = () => {
		localStorage.setItem('timerValue', String(timerValue));
	};

	const handleChangeVolume = () => {
		localStorage.setItem('volumeValue', String(volumeValue));
	};

	const handleToogleTimer = () => {
		if (hasTimer) {
			hasTimer = false;
			localStorage.removeItem('hasTimer');
		} else {
			hasTimer = true;
			localStorage.setItem('hasTimer', 'true');
			handleChangeTime();
		}
	};

	const handleToogleSounds = () => {
		if (hasSounds) {
			hasSounds = false;
			localStorage.removeItem('hasSounds');
		} else {
			hasSounds = true;
			localStorage.setItem('hasSounds', 'true');
			handleChangeVolume();
		}
	};
</script>

<div class="container">
	<form class="settings__form">
		<div class="notify__container">
			<div class="turn-notify_container">
				<label class="container__label" for="notify">Звуки</label>
				<input
					class="timer__input notify__checker"
					type="checkbox"
					name="notify"
					id="notify"
					onchange={handleToogleSounds}
					checked={hasSounds}
				/>
			</div>
			<div class="range_container">
				<input
					class="notify__input"
					type="range"
					name="notify-range"
					id="notify"
					disabled={!hasSounds}
					bind:value={volumeValue}
					onchange={handleChangeVolume}
					min="0"
					max="100"
				/>
			</div>
		</div>
		<div class="turn-time_container">
			<div class="timer__container">
				<label class="container__label" for="timer_checked">Таймер</label>
				<input
					class="timer__input"
					id="timer_checked"
					type="checkbox"
					name="timer"
					onchange={handleToogleTimer}
					checked={hasTimer}
				/>
			</div>
			<div class="time__container">
				<label class="container__label" for="time">Секунды</label>
				<div class="time-input__container">
					<button
						class="time-btn"
						type="button"
						disabled={!hasTimer}
						onclick={() => {
							if (timerValue > 10) {
								timerValue -= 5;
							}

							handleChangeTime();
						}}>-</button
					>
					<input
						class="time__input"
						id="time"
						type="number"
						min="10"
						max="30"
						value={timerValue}
						disabled={!hasTimer}
						readonly
					/>
					<button
						class="time-btn"
						type="button"
						disabled={!hasTimer}
						onclick={() => {
							if (timerValue < 30) {
								timerValue += 5;
							}

							handleChangeTime();
						}}>+</button
					>
				</div>
			</div>
		</div>
	</form>
</div>

<style lang="scss">
	.container {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		min-width: 100vw;
		min-height: 500px;
		top: 50%;
		transform: translateY(-50%);
		z-index: 9;
		background: rgba($color: #000000, $alpha: 0);
	}

	.turn-time_container {
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.settings__form {
		width: 100%;
		height: 400px;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
	}

	.container__label {
		font-size: 18px;
	}

	.notify__container {
		width: 100%;
		min-height: 80px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.turn-notify_container {
		width: 100px;
		height: 80px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.range_container {
		min-width: 200px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.timer__container {
		width: 100px;
		height: 80px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.timer__input {
		width: 40px;
		height: 40px;
	}

	.time__container {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}

	.time-input__container {
		min-width: 200px;
		min-height: 50px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.time-btn {
		width: 40px;
		height: 40px;
		border: 2px solid #ffffff;
		border-radius: 50%;
		font-size: 20px;
		background-color: inherit;
		transition: all 0.3 ease-in-out;
		cursor: pointer;
		&:hover {
			color: #000000;
			background-color: #ffffff;
		}

		&:disabled {
			cursor: not-allowed;
			pointer-events: none;
			color: #efefef4d;
			border-color: #efefef4d;
		}
	}

	.time__input {
		width: 40px;
		height: 40px;
		border: 0;
		font-size: 20px;
		text-align: center;
		background-color: inherit;
		transition: all 0.3 ease-in-out;

		&:focus {
			outline: none;
		}

		&:disabled {
			pointer-events: none;
			color: #efefef4d;
		}
	}
</style>
