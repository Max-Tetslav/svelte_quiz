export const soundsPath = {
	timer: '/audio/timer.mp3',
	failRound: '/audio/fail-round.mp3',
	successRound: '/audio/success-round.mp3',
	rightAnswer: '/audio/right-answer.mp3',
	wrongAnswer: '/audio/wrong-answer.mp3'
};

type sounds = keyof typeof soundsPath;

export const preloadAudio = (): void => {
	Object.values(soundsPath).forEach((src) => {
		const audio = new Audio(src);
		audio.preload = 'auto';
		audio.load();
	});
};

export const playSound = (key: sounds): void => {
	const audio = new Audio(soundsPath[key]);
	audio.volume = Number(localStorage.getItem('volumeValue')) / 100;

	audio.play();
};
