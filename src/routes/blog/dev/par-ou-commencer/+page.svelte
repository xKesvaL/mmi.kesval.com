<script>
	import { Button } from '$lib/components/ui/button';
</script>

<section class="-mt-28 h-full pb-28">
	<article class="container flex h-screen max-w-[80ch] flex-col gap-8 pt-28">
		<div class="flex flex-col gap-4">
			<h1 class="scroll-m-20 font-title text-4xl font-black tracking-tight lg:text-5xl">
				Par où commencer ?
			</h1>
			<p>
				T'as envie de tout déchirer dans le développement web mais tu sais pas par où commencer ?
				Laisse moi te guider :)
			</p>
		</div>
		<div class="flex flex-col gap-4">
			<h2 class="scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight">Les Outils</h2>
			<p>Voici la liste des outils qu'on va utiliser :</p>
			<ul class="list-inside list-disc">
				<li>
					<Button
						href="https://code.visualstudio.com/"
						target="_blank"
						variant="link"
						class="h-auto p-0 text-base text-secondary"><code>Visual Studio Code</code></Button
					>
				</li>
				<li>
					<Button
						href="https://figma.com/"
						variant="link"
						target="_blank"
						class="h-auto p-0 text-base text-secondary"><code>Figma</code></Button
					>
				</li>
				<li>
					<Button
						href="https://vercel.com/"
						variant="link"
						target="_blank"
						class="h-auto p-0 text-base text-secondary"><code>Github</code></Button
					> (Bonus)
				</li>
				<li>
					<Button
						href="https://www.figma.com/"
						variant="link"
						target="_blank"
						class="h-auto p-0 text-base text-secondary"><code>Vercel</code></Button
					> (Bonus)
				</li>
			</ul>
		</div>
		<div class="flex flex-col gap-4">
			<h2 class="scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight">Prérequis</h2>
			<p>
				Tant que tu sais ce que c'est qu'une &lt;balise&gt; HTML et ce qu'est le CSS même un tout
				petit peu, tout devrait bien se passer !
			</p>
		</div>
		<div class="flex flex-col gap-4">
			<h2 class="scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight">
				La manière de penser
			</h2>
			<p>
				En développement, la manière de penser c'est le plus important. Il faut que tu saches à
				l'avance ce que tu veux faire et comment tu vas le faire avant de te mettre à coder.
			</p>
			<p>
				Pour un site web, on va souvent commencer par faire un <code>Wireframe</code> (un schéma) de
				notre site web. Pour ça, on va utiliser <Button
					href="https://figma.com/"
					variant="link"
					target="_blank"
					class="h-auto p-0 text-base text-secondary"><code>Figma</code></Button
				> qui est un outil de design.
			</p>
			<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">Figma</h3>
			<p>
				Tu peux aller sur <Button
					href="https://figma.com/"
					variant="link"
					target="_blank"
					class="h-auto p-0 text-base text-secondary"><code>Figma</code></Button
				> et te créer un compte gratuit. Une fois que c'est fait, tu peux créer un nouveau fichier en
				cliquant sur le bouton <code>+ Design File</code> qui ressemble à ça :
			</p>
			<Button class="max-w-[8rem] bg-blue-600 hover:bg-blue-700">+ Design File</Button>
			<p>
				Bienvenue sur Figma ! :) Tu peux explorer si tu veux, c'est plutôt simple. Tu peux mettre
				des formes, du texte, dessiner...
			</p>
		</div>
	</article>
</section>

<style lang="scss">
	section {
		background: radial-gradient(circle at 28% 37%, hsl(var(--primary-300) / 0.1), transparent 50%),
			radial-gradient(circle at 70% 66%, hsl(var(--secondary-300) / 0.1), transparent 50%);
	}
</style>
