const Skills = {
	data() {
		return {
			loading: true,
			skills: [],
		}
	},
	mounted() {
		this.loading = false
		this.skills = [
			{
				id: 1,
				text: 'HTML',
				css: 'html',
				percentaje: '90%',
			},
			{
				id: 2,
				text: 'CSS',
				css: 'css',
				percentaje: '78%',
			},
			{
				id: 3,
				text: 'JS',
				css: 'js',
				percentaje: '80%',
			},
			{
				id: 4,
				text: 'TS',
				css: 'ts',
				percentaje: '40%',
			},
			{
				id: 5,
				text: 'C++',
				css: 'cpp',
				percentaje: '63%',
			},
			{
				id: 6,
				text: 'C',
				css: 'c',
				percentaje: '70%',
			},
			{
				id: 7,
				text: 'Py',
				css: 'python',
				percentaje: '40%',
			},
			{
				id: 8,
				text: 'React',
				css: 'react',
				percentaje: '68%',
			},
		]
	},
}

Vue.createApp(Skills).mount('#skills')
