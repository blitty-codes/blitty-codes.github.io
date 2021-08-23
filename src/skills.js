const Skills = {
	data() {
		return {
			loading: true,
			tech_skills: [],
		}
	},
	mounted() {
		this.loading = false
		this.tech_skills = [
			{
				id: 1,
				text: 'HTML',
				css: 'html',
			},
			{
				id: 2,
				text: 'CSS',
				css: 'css',
			},
			{
				id: 3,
				text: 'JS',
				css: 'js',
			},
			{
				id: 4,
				text: 'TS',
				css: 'ts',
			},
			{
				id: 5,
				text: 'C++',
				css: 'cpp',
			},
			{
				id: 6,
				text: 'C',
				css: 'c',
			},
			{
				id: 7,
				text: 'Python',
				css: 'python',
			},
			{
				id: 8,
				text: 'React',
				css: 'react',
			},
		]
	},
}

Vue.createApp(Skills).mount('#skills')
