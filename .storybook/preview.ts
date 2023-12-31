import type { Preview } from '@storybook/svelte';
import { themes } from '@storybook/theming';

import '@kesval/design';
import '../src/lib/styles/main.scss';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		},
		layout: 'centered',
		docs: themes.dark
	}
};

export default preview;
