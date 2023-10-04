<script lang="ts">
	import { ROUTES } from '$lib/config';
	import Image from '../base/Image.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<header
	class="container-sm container sticky top-0 flex items-center justify-between bg-card/90 backdrop-blur-md backdrop-saturate-200 lg:top-4 lg:mb-8 lg:rounded-2xl"
>
	<a
		class="flex h-12 w-12 items-center justify-center rounded-full bg-white"
		href={ROUTES.home.path}
	>
		<Image src="/images/logo/logo.png" alt="Logo MMI" />
	</a>
	<nav>...</nav>
	<div>
		<ThemeSwitcher />
	</div>
</header>
