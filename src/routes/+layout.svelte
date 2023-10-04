<script lang="ts">
	import { navigating } from '$app/stores';
	import { BRAND } from '$lib/config';

	import '$lib/styles/main.scss';
	import '$lib/styles/nprogress.scss';
	import '@kesval/design';
	import '../app.postcss';

	import nprogress from 'nprogress';
	import { setupViewTransition } from 'sveltekit-view-transition';

	import Navigation from '$lib/components/layout/Navigation.svelte';
	import BackToTopButton from '$lib/components/layout/BackToTopButton.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	nprogress.configure({ easing: 'ease', minimum: 0.2, speed: 600 });
	$: $navigating ? nprogress.start() : nprogress.done();

	setupViewTransition();
</script>

<svelte:head>
	<meta content={BRAND.author.name} name="copyright" />
	<meta content={BRAND.name} name="og:site_name" />
</svelte:head>

<Navigation />

<main>
	<slot />
</main>

<BackToTopButton />
<Footer />
