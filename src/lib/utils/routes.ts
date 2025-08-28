export type Pages = 'home' | 'settings' | 'arts' | 'artists';

type PageData = {
	title: string;
	hasSettings: boolean;
	hasReturnButton: boolean;
};

export const routes: Record<Pages, PageData> = {
	home: {
		title: '',
		hasSettings: true,
		hasReturnButton: false
	},
	settings: {
		title: 'Настройки',
		hasSettings: false,
		hasReturnButton: true
	},
	arts: {
		title: 'Картины',
		hasSettings: false,
		hasReturnButton: true
	},
	artists: {
		title: 'Художники',
		hasSettings: false,
		hasReturnButton: true
	}
};
