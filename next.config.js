// next.config.js
module.exports = {
	images: {
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		domains: [
			'res.cloudinary.com',
			'lh3.googleusercontent.com',
			'avatars.githubusercontent.com',
			'pbs.twimg.com',
			'a0.muscache.com',
		],
	},
	env: {
		mapbox_key: process.env.MAPBOX_KEY,
		stripe_public_key:process.env.STRIPE_PUBLIC_KEY
	},
};
