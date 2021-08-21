const Projects = {
	data () {
		return {
			loading: true,
			projects_info: [],
		};
	},
	mounted () {
		this.loading = false;
		this.projects_info = [
			{
				id: 1,
				img: '../public/images/projects/rick-power.jpeg',
				alt: 'Rick and Morty repo',
				link: 'https://github.com/blitty-codes/rick-power'
			},
			{
				id: 2,
				img: '../public/images/projects/cpp-notes.jpeg',
				alt: 'cpp-notes',
				link: 'https://github.com/blitty-codes/cpp-notes'
			},
			{
				id: 3,
				img: '../public/images/projects/Todo-s.jpeg',
				alt: 'Todo list repo',
				link: 'https://github.com/blitty-codes/Todo-s'
			},
			{
				id: 4,
				img: '../public/images/projects/s-wass.jpeg',
				alt: 's-wass repo',
				link: 'https://github.com/blitty-codes/s-wass'
			},
			{
				id: 5,
				img: '../public/images/projects/libft.jpeg',
				alt: 'libft repo',
				link: 'https://github.com/blitty-codes/libft'
			},
		];
	}
};

Vue.createApp(Projects).mount('#projects');
