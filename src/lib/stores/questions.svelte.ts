import data from '$lib/assets/images.json';
import { shuffleArray } from '$lib/utils/shuffleArray';

const createRounds = (questions: any[]) => {
	let roundStartIndex = 0;

	const roundsQuestions: Array<Array<any>> = new Array(12).fill([]).map((item, index) => {
		if (index > 0) roundStartIndex += 10;

		return item.concat(questions.slice(roundStartIndex, roundStartIndex + 10));
	});

	return roundsQuestions;
};

export const createArtsQuestions = (data: any[]) => {
	const artsQuestions = data.slice(0, data.length / 2).map((item) => {
		return {
			...item,
			question: `Автором какой из этих картин является <br/> ${item.author}?`
		};
	});

	return createRounds(artsQuestions);
};

export const createArtistsQuestions = (data: any[]) => {
	const artistsQuestions = data.slice(data.length / 2).map((item) => {
		return {
			...item,
			question: `Кто написал картину <br/> «${item.name}»?`
		};
	});

	return createRounds(artistsQuestions);
};

export const artsQuestions = $state(createArtsQuestions(data));
export const artistQuestings = $state(createArtistsQuestions(data));

export const createArtQuestionVariants = (
	rightAnswer: string,
	category: 'arts' | 'artists'
): string[] => {
	const variants = [rightAnswer];

	while (variants.length < 4) {
		const questionNum = Math.round(Math.random() * 240);

		const fakeAnswer = category === 'arts' ? questionNum.toString() : data[questionNum].author;

		if (!variants.includes(fakeAnswer)) {
			variants.push(fakeAnswer);
		}
	}

	return shuffleArray(variants);
};
