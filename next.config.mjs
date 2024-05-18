/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify:true,
	optimizeFonts: true,
	images: {
		remotePatterns: [{
			protocol: "https",
			hostname: "**",
		}],
	},
};

export default nextConfig;
