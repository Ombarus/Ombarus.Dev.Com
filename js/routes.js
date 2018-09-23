var routes = [
	// Index page
	{
		path: '/',
		url: './index.html',
		name: 'home',
	},
	// About page
	{
		path: '/about/',
		url: './about.html',
		name: 'about',
	},
	// About page
	{
		path: '/dicedm/',
		url: './dicedm/index.html',
		name: 'dicedm',
	},
	
	// First page (changed dynamically based on options)
	{
		path: '/first/',
		async(routeTo, routeFrom, resolve, reject) {
			resolve({ url: 'home.html' })
		}
	},

	// Default route (404 page). MUST BE THE LAST
	{
		path: '(.*)',
		url: './pages/404.html',
	},
];
