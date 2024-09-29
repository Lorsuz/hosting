/** @type {import('next').NextConfig} */
const nextConfig = {};

import * as sass from 'sass';
import path from 'path';


export default {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'source.unsplash.com',
				port: '',
				pathname: '/random/**',
			},
		],
	},
	...nextConfig,
	sassOptions: {
		includePaths: [ path.resolve(process.cwd(), 'public', 'styles' ) ],
		implementation: sass
	}
};
