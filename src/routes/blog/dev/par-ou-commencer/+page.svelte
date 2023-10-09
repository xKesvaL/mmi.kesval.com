<script>
	import Image from '$lib/components/base/Image.svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="flex flex-col gap-4">
	<h1 class="scroll-m-20 font-title text-4xl font-black tracking-tight lg:text-5xl">
		Par où commencer ?
	</h1>
	<p>
		T'as envie de tout déchirer dans le développement web mais tu sais pas par où commencer ? Laisse
		moi te guider :)
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
				class="h-auto p-0 text-base text-accent"><code>Visual Studio Code</code></Button
			>
		</li>
		<li>
			<Button
				href="https://figma.com/"
				variant="link"
				target="_blank"
				class="h-auto p-0 text-base text-accent"><code>Figma</code></Button
			>
		</li>
		<!-- <li>
			<Button
				href="https://vercel.com/"
				variant="link"
				target="_blank"
				class="h-auto p-0 text-base text-accent"><code>Github</code></Button
			> (Bonus)
		</li>
		<li>
			<Button
				href="https://www.figma.com/"
				variant="link"
				target="_blank"
				class="h-auto p-0 text-base text-accent"><code>Vercel</code></Button
			> (Bonus)
		</li> -->
	</ul>
</div>
<div class="flex flex-col gap-4">
	<h2 class="scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight">Prérequis</h2>
	<p>
		Tant que tu sais ce que c'est qu'une &lt;balise&gt; HTML et ce qu'est le CSS même un tout petit
		peu, tout devrait bien se passer !
	</p>
</div>
<div class="flex flex-col gap-4">
	<h2 class="scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight">La manière de penser</h2>
	<p>
		En développement, la manière de penser c'est le plus important. Il faut que tu saches à l'avance
		ce que tu veux faire et comment tu vas le faire avant de te mettre à coder.
	</p>
	<p>
		Pour un site web, on va souvent commencer par faire un <code>Wireframe</code> (un schéma) de
		notre site web. Pour ça, on va utiliser <Button
			href="https://figma.com/"
			variant="link"
			target="_blank"
			class="h-auto p-0 text-base text-accent"><code>Figma</code></Button
		> qui est un outil de design.
	</p>
	<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">Figma</h3>
	<p>
		Tu peux aller sur <Button
			href="https://figma.com/"
			variant="link"
			target="_blank"
			class="h-auto p-0 text-base text-accent"><code>Figma</code></Button
		> et te créer un compte gratuit. Une fois que c'est fait, tu peux créer un nouveau fichier en cliquant
		sur le bouton <code>+ Design File</code> qui ressemble à ça :
	</p>
	<Button class="max-w-[8rem] bg-blue-600 hover:bg-blue-700">+ Design File</Button>
	<p>
		Bienvenue sur Figma ! :) Tu peux explorer si tu veux, c'est plutôt simple. Tu peux mettre des
		formes, du texte, dessiner...
	</p>
	<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">Le Wireframe</h3>
	<p>
		Pour faire un wireframe il faut déjà avoir une idée de ce qu'on veut. Pour faciliter la tâche,
		et aussi parce que c'est ce que tu vas devoir faire en partiel de front, on va refaire un site
		web. Voilà celui qu'on va refaire :
	</p>
	<Image
		src="/images/blog/dev/par-ou-commencer/mmi-site.png"
		alt="Capture d'écran du site MMI UHA"
	/>
	<p>
		Observons d'abord comment c'est structuré. Il y a clairement une image de fond, une barre de
		navigation en haut, et du texte au centre. Lors de la création d'un wireframe, on va chercher à
		trouver les gros « blocs » de notre site web. Ici on peut déjà penser à 3 blocs :
	</p>
	<ul class="list-inside list-disc">
		<li>Barre de navigation</li>
		<li>Texte au centre</li>
		<li>Image de fond</li>
	</ul>
	<p>
		Pour un wireframe, on va simplement dessiner ces blocs en mettant des formes qui représentent ce
		qu'on l'on veut à la fin. Évidemment, on sera plus précis, c'est à dire qu'on va pas juste
		mettre un gros bloc pour la barre de navigation, on va y ajouter d'autres petits blocs à
		l'intérieur qui représentent les éléments de la barre.
	</p>
	<p>Pour commencer sur figma, on peut rajouter une « Frame » en cliquant ici :</p>
	<div class="mx-auto max-w-xs">
		<Image
			src="/images/blog/dev/par-ou-commencer/frame-figma.png"
			alt="Capture d'écran du bouton ajouter une Frame sur Figma"
		/>
	</div>
	<p>
		Puis en cliquer-glisser comme pour dessiner un rectangle. On a une liste à gauche, la liste de
		tous nos éléments, et à droite, les détails sur l'élement sélectionné. On va changer la taille
		de notre frame en la sélectionnant si ce n'est pas déjà fait, et en changeant le <code>W</code>
		et le <code>H</code> dans les détails à droite. On va mettre <code>1920</code> pour la largeur (<code
			>W</code
		>) et <code>1080</code> pour la hauteur (<code>H</code>). C'est la taille d'un écran
		d'ordinateur classique.
	</p>
	<p>
		On peut utiliser la molette de la souris en cliquer-glisser pour se déplacer et <kbd>CTRL</kbd>
		+ <kbd>molette</kbd> pour zoomer. On va ajouter des formes pour représenter nos blocs en utilisant
		le menu en haut à gauche. On ajoutera un contour (Stroke) à nos formes. On obtiendra quelque chose
		comme ça :
	</p>
	<Image
		src="/images/blog/dev/par-ou-commencer/figma-wireframe-1.png"
		alt="Un wireframe simple sur Figma du site MMI UHA, Étape 1"
	/>
	<p>
		On peut voir que c'est vraiment très simple, mais c'est tout ce qu'on a besoin pour l'instant.
		Jusqu'ici, on a réfléchi comme un designer, pas comme un développeur. Comment est-ce que je
		ferais pour coder tous ces carrés ? Souvent, on va utiliser des <code>&lt;div&gt;</code>s si
		aucun autre élément ne correspond. Comment est-ce que je mets les carrés à côté des autres ?
		Oui,
		<code>display: flex;</code>.
	</p>
	<p>
		Mais comment je mets flex sur les cinqs éléments au milieu de la barre de navigation ? Bonne
		question! On peut rajouter une <code>&lt;div&gt;</code> autour pour les englober dans un nouveau
		carré, et mettre ce carré là en flex, comme ça :
	</p>
	<Image
		src="/images/blog/dev/par-ou-commencer/figma-wireframe-2.png"
		alt="Un wireframe simple sur Figma du site MMI UHA, Étape 2"
	/>
	<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">Code - HTML</h3>
	<p>
		C'est l'heure de coder ! Maintenant c'est simple, chaque carré, c'est une <code
			>&lt;div&gt;</code
		>. Parfois, on a des éléments qui ont plus de sens, comme pour le titre, on utilisera un
		<code>&lt;h1&gt;</code>
		pas une <code>&lt;div&gt;</code>, pour les liens, des <code>&lt;a&gt;</code>.
	</p>
	<p>
		Si on reproduit le wireframe, en respectant la hiérarchie des éléments (le fait que certains
		blocs soit dans d'autres blocs), et qu'on ajoute une petite règle CSS pour voir les bordures,
		<code>{`\`* { outline: 1px red; }\``}</code> (met le dans le css), on obtient ça :
	</p>
	<iframe
		src="/images/blog/dev/par-ou-commencer/dev-site-1.html"
		frameborder="0"
		title="Reproduction du site MMI UHA, Étape 1"
		class="aspect-video"
	></iframe>
	<div class="flex gap-4">
		<Button
			href="/images/blog/dev/par-ou-commencer/dev-site-1.txt"
			class="flex-grow"
			target="_blank"
		>
			Voir le code
		</Button>
		<Button
			href="/images/blog/dev/par-ou-commencer/dev-site-1.html"
			class="flex-grow"
			target="_blank"
			variant="secondary"
		>
			Voir le site actuel
		</Button>
	</div>
	<p>
		Attention, à partir d'ici sur téléphone le site qu'on fait piquera les yeux, je conseille donc
		de lire ce post sur ordinateur.
	</p>
	<p>
		Comme on peut le voir sans style tout est l'un au dessus de l'autre. On va ajouter un peu de
		flex par ci par là pour que ça ressemble à notre wireframe. On va l'ajouter sur la barre de
		navigation, et sur les éléments de la barre de navigation. Voilà le résultat :
	</p>
	<iframe
		src="/images/blog/dev/par-ou-commencer/dev-site-2.html"
		frameborder="0"
		title="Reproduction du site MMI UHA, Étape 2"
		class="aspect-video"
	></iframe>
	<div class="flex gap-4">
		<Button
			href="/images/blog/dev/par-ou-commencer/dev-site-2.txt"
			class="flex-grow"
			target="_blank"
		>
			Voir le code
		</Button>
		<Button
			href="/images/blog/dev/par-ou-commencer/dev-site-2.html"
			class="flex-grow"
			target="_blank"
			variant="secondary"
		>
			Voir le site actuel
		</Button>
	</div>
	<p>
		C'est toujours pas très beau parce que nos éléments sont collés et pas positionnés au bon
		endroit. Pour régler ça on peut ajouter du padding dans la navbar pour que les éléments ne
		soient pas collés au bord, et puis on peut utiliser du <code>gap</code> pour espacer les éléments
		entre eux. On obtient ça:
	</p>
	<iframe
		src="/images/blog/dev/par-ou-commencer/dev-site-3.html"
		frameborder="0"
		title="Reproduction du site MMI UHA, Étape 3"
		class="aspect-video"
	></iframe>
	<div class="flex gap-4">
		<Button
			href="/images/blog/dev/par-ou-commencer/dev-site-3.txt"
			class="flex-grow"
			target="_blank"
		>
			Voir le code
		</Button>
		<Button
			href="/images/blog/dev/par-ou-commencer/dev-site-3.html"
			class="flex-grow"
			target="_blank"
			variant="secondary"
		>
			Voir le site actuel
		</Button>
	</div>
	<p>
		Là on va parler de propriétés flex, si tu as du mal avec ça, je te conseille de faire un tour
		sur
		<Button
			href="https://flexboxfroggy.com/"
			target="_blank"
			class="h-auto p-0 text-base text-accent"
			variant="link"
		>
			Flexbox Froggy
		</Button> et d'y faire quelques niveaux pour bien comprendre les propriétés flex.
	</p>
	<p>
		Ok c'est vraiment mieux, mais c'est toujours pas bien positionné. On veut que le logo soit a
		gauche, le menu au milieu et les icones a droite. Pour ça, on va utiliser <code
			>justify-content</code
		>
		sur la navbar. On va mettre <code>space-between</code> pour que les éléments soient espacés le plus
		possible. On obtient ça :
	</p>
	<iframe
		src="/images/blog/dev/par-ou-commencer/dev-site-4.html"
		frameborder="0"
		title="Reproduction du site MMI UHA, Étape 4"
		class="aspect-video"
	></iframe>
	<div class="flex gap-4">
		<Button
			href="/images/blog/dev/par-ou-commencer/dev-site-4.txt"
			class="flex-grow"
			target="_blank"
		>
			Voir le code
		</Button>
		<Button
			href="/images/blog/dev/par-ou-commencer/dev-site-4.html"
			class="flex-grow"
			target="_blank"
			variant="secondary"
		>
			Voir le site actuel
		</Button>
	</div>
	<p>
		On a fait qu'un seul changement, mais ça fait toute la différence. Il reste quelques petits
		problèmes :
	</p>
	<ul class="list-inside list-disc">
		<li>Il y a un espace tout autour de la page</li>
		<li>Le texte n'est pas centré</li>
		<li>Il nous manque l'image de fond</li>
	</ul>
	<p>La résolution de ces problèmes dans l'ordre :</p>
	<ul class="list-inside list-disc">
		<li>
			Il faut mettre un <code>margin: 0;</code> sur le body (il y a <code>8px</code> de margin sur le
			body de base)
		</li>
		<li>
			On peut utiliser un <code>flex</code> sur le texte et mettre
			<code>justify-content: center;</code>
			et <code>align-items: center;</code> pour centrer le texte. Le bouton ne sera pas centré parce
			qu'il ne prend pas toute la largeur, mais on peut le centrer avec
			<code>margin-left/right: auto;</code>
		</li>
		<li>
			On peut utiliser une image de fond avec <code>background-image: url(...);</code> et
			<code>background-size: cover;</code> pour que l'image prenne toute la place, sur la div qui
			contient tout (navbar + texte)!
			<br />
			<br />
			PS: On regroupe la navbar et le texte dans une div pour pouvoir mettre l'image de fond sur cette
			div. Ça évite que si on rajoute encore du contenu, l'image de fond reste sur la navbar et le texte
			de bienvenue et ne s'étire pas. On ajoutera aussi <code>min-height: 100vh;</code> sur la div pour
			qu'elle prenne au minimum toute la hauteur de l'écran.
		</li>
	</ul>
	<p>
		J'ai aussi changé certains éléments pour les rendre plus logiques, par exemple de <code
			>div</code
		>
		à <code>header</code> et on obtient alors ça :
	</p>
	<iframe
		src="/images/blog/dev/par-ou-commencer/dev-site-5.html"
		frameborder="0"
		title="Reproduction du site MMI UHA, Étape 5"
		class="aspect-video"
	></iframe>
	<div class="flex flex-wrap gap-4">
		<Button
			href="/images/blog/dev/par-ou-commencer/dev-site-5.txt"
			class=" flex-grow"
			target="_blank"
		>
			Voir le code
		</Button>
		<Button
			href="/images/blog/dev/par-ou-commencer/dev-site-5.html"
			class=" flex-grow"
			target="_blank"
			variant="secondary"
		>
			Voir le site actuel
		</Button>
		<Button
			href="/images/blog/dev/par-ou-commencer/dev-site-5.png"
			class=" flex-grow"
			target="_blank"
			variant="default"
			download="image-fond.png">Télécharger l'image</Button
		>
	</div>
	<p>
		Ca y est, la majorité du travail est fait ! Il ne reste plus qu'à ajouter un peu de style en
		utilisant des couleurs, des tailles de police, du padding et on obtient ça :
	</p>
	<iframe
		src="/images/blog/dev/par-ou-commencer/dev-site-6.html"
		frameborder="0"
		title="Reproduction du site MMI UHA, Étape 6"
		class="aspect-video"
	></iframe>
	<div class="flex gap-4">
		<Button
			href="/images/blog/dev/par-ou-commencer/dev-site-6.txt"
			class=" flex-grow"
			target="_blank"
		>
			Voir le code
		</Button>
		<Button
			href="/images/blog/dev/par-ou-commencer/dev-site-6.html"
			class=" flex-grow"
			target="_blank"
			variant="secondary"
		>
			Voir le site actuel
		</Button>
	</div>
	<p>
		Et voilà tout ! On a fait un site web en partant de rien, en réfléchissant à l'avance à ce qu'on
		voulait faire, et en utilisant des outils simples. On a utilisé du HTML et du CSS, et on a
		utilisé Figma pour faire un wireframe.
	</p>
	<p>
		Si tu as encore des questions, n'hésite pas à me contacter sur <Button
			href="https://instagram.com/xkesval"
			target="_blank"
			class="h-auto p-0 text-base text-accent"
			variant="link"
		>
			Instagram</Button
		> !
	</p>
</div>
