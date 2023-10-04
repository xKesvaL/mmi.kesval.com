import type { Brand, Route } from './typings/standard';

export const BRAND = {
	author: {
		name: 'KesvaL',
		url: 'https://kesval.com'
	},
	logo: {
		dark: '/images/logos/logo.png',
		light: '/images/logos/logo.png'
	},
	name: 'MMI',
	url: 'https://mmi.kesval.com'
} as const satisfies Brand;

export const ROUTES = {
	home: {
		path: '/'
	}
} as const satisfies Record<string, Route>;
