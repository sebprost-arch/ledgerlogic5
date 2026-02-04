/** @type {import('next').NextConfig} */
const nextConfig = {
    // Performance optimizations
    reactStrictMode: true,

    // SWC minification (faster than Terser)
    swcMinify: true,

    // Optimize external packages
    transpilePackages: ['framer-motion', 'lucide-react'],

    // Image optimization
    images: {
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
    },

    // Compiler options
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    async redirects() {
        return [
            {
                source: '/blog/5653',
                destination: '/blog/how-to-use-float-credit-cards',
                permanent: true,
            },
            {
                // Strict regex to match ONLY /YYYY/MM/DD/slug and NOT /images/...
                source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug*',
                destination: '/blog/:slug*',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;

