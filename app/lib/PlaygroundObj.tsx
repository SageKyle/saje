type playgroundItemType = {
	name: string
	desc: string
	href: string
	tags: string[]
	link?: string
}

export const playgroundObj: playgroundItemType[] = [
	{
		name: 'backtick technologies',
		desc: 'A Smartphone reseller and repair specialist website',
		href: 'backtick-technologies',
		link: 'backticktech.netlify.app',
		tags: ['html', 'css', 'JavaScript', 'web dev'],
	},
	{
		name: 'devscope',
		desc: 'A project management system created with React js',
		href: 'devscope',
		tags: ['react', 'css', 'JavaScript', 'state management'],
	},
	{
		name: 'advice generator',
		desc: 'advice generator website designed with CSS and JavaScript',
		href: 'advice-generator',
		link: 'sajeadvice.netlify.app/',
		tags: ['html', 'css', 'JavaScript', 'api'],
	},
	{
		name: 'backtick recipes',
		desc: 'A website created with React js that displays food recipes and also allows you to add and delete recipes',
		href: 'backtick-recipes',
		link: 'backtick-recipes.netlify.app/',
		tags: ['react', 'css', 'JavaScript', 'state management'],
	},
	{
		name: 'zen money',
		desc: 'a personal finance tracker created with react',
		href: 'zen-money',
		tags: ['react', 'css', 'JavaScript'],
	},
	{
		name: 'backtick finance',
		desc: 'a responsive broker site clone',
		href: 'backtick-finance',
		link: 'backtickfinance.netlify.app/',
		tags: ['html', 'css', 'JavaScript', 'design'],
	},
	{
		name: 'calculator',
		desc: 'a lightweight and fast calculator built with only HTML, CSS and Javascript that is both installable and works offline.',
		href: 'Calculator',
		link: 'sagekyle.github.io/Calculator/',
		tags: ['JavaScript', 'DOM manipulation', 'pwa', 'design'],
	},
	{
		name: 'blogr landing page',
		desc: 'This is a solution to the Blogr landing page challenge on Frontend Mentor.',
		href: 'Blogr-landing-page',
		link: 'sagekyle.github.io/Blogr-landing-page/',
		tags: [
			'JavaScript',
			'DOM manipulation',
			'html',
			'mobile-first development',
		],
	},
]
