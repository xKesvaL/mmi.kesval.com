<section class="-mt-28 h-full">
	<article class="container flex min-h-screen max-w-[80ch] flex-col gap-8 pt-36">
		<slot />
	</article>
</section>

<style lang="scss">
	section {
		background: radial-gradient(circle at 28% 37%, hsl(var(--primary-300) / 0.1), transparent 50%),
			radial-gradient(circle at 70% 66%, hsl(var(--secondary-300) / 0.1), transparent 50%);
	}
</style>
