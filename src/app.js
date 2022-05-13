const App = {
	setup: () => {
		const es = {
			about: 'Sobre mi',
			aboutInfo: `
				<b>48 65 6c 6c 6f 21 21</b>
				<br /><br />
				Me <b>encanta</b> la programación, puedes llamarme <b>B</b> o
				<b>Blitty</b>. <br /><br />
				Cosas que hago (en tecnología):
				<ul class="list_done">
					<li>Desarrollo web</li>
					<li>Programación competitiva</li>
					<li>AI, ML (un poco de conocimiento)</li>
					<li>Ideas de productos</li>
					<li>Aprender nuevas tecnologías</li>
					<li>Googlear</li>
				</ul>
				<br />
				Cosas que <i>quiero</i> hacer (en tecnología):
				<ul class="list_undone">
					<li>IoT</li>
					<li>DL</li>
					<li>Contribución al código abierto</li
					<li>Hacking ético</li>
					<li>Blockchain</li>
				</ul>
				Esto es sólo una pequeña entrada, pero me gustaría encontrar gente para empezar a
				aprender o crear cosas nuevas e innovadoras, cosa que me encanta hacer.
				<br /><br />
				<u>Q29udGFjdCBtZSEh ;)</u>
			`,
			blogs: 'Blogs',
			projects: 'Proyectos',
			projectMore: `
				Y mucho más!!! Ve a mi
				<a href="https://github.com/blitty-codes">perfil de GH</a>
			`,
			skills: 'Habilidades',
			skillsCharac: [
				'Comunicación',
				'Googling',
				'Adaptación',
				'Trabajo en equipo',
				'Creativo',
				'Resolución de problemas',
			],
			idioms: 'Idiomas',
			idiomsText: `
				<p>🇪🇸 Español - Nativo</p>
				<p>🇬🇧 Ingles - Fluido</p>
				<p>🇩🇪 Aleman - Iniciado</p>
				<p>🇫🇷 Frances - Iniciado</p>
			`,
		}
		const en = {
			about: 'About me',
			aboutInfo: `
					<b>48 65 6c 6c 6f 21 21</b>
					<br /><br />
					I <b>love</b> programming, you can call me <b>B</b> or
					<b>Blitty</b>. <br /><br />
					Things I do (in tech):
					<ul class="list list_done">
						<li>Web development</li>
						<li>Competitive Programming</li>
						<li>AI, ML (a little knowledge)</li>
						<li>Product Ideas</li>
						<li>Learn new technology</li>
						<li>Googling</li>
					</ul>
					<br />
					Things I <i>want</i> to do (in tech):
					<ul class="list list_undone">
						<li>IoT</li>
						<li>DL</li>
						<li>Open Source Contribution</li>
						<li>Ethical Hacking</li>
						<li>Blockchain</li>
					</ul>
					That is just a small entry, but I wish I find people to start
					learning or creating new innovative things, which I love to do.
					<br /><br />
					<u>Q29udGFjdCBtZSEh ;)</u>
				`,
			blogs: 'Blogs',
			projects: 'Projects',
			projectMore: `
					And much more!!! Go to my
					<a href="https://github.com/blitty-codes">GH profile</a>
				`,
			skills: 'Skills',
			skillsCharac: [
				'Communication',
				'Googling',
				'Adaptation',
				'Teamwork',
				'Creative',
				'Problem Solving',
			],
			idioms: 'Idioms',
			idiomsText: `
					<p>🇪🇸 Spanish - Native</p>
					<p>🇬🇧 English - Fluent</p>
					<p>🇩🇪 German - Iniciate</p>
					<p>🇫🇷 Frances - Iniciate</p>
				`,
		}
		const idiom = Vue.reactive({
			info: es,
		})

		const changeLang = (e) => {
			console.log(e)
			let lang = e.target.value
			if (lang === 'en') {
				idiom.info = en
			} else {
				idiom.info = es
			}
		}

		console.log(idiom.info.about)

		return { idiom, changeLang }
	},
}

Vue.createApp(App).mount('#app')
