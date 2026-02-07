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
            { source: '/tools/xero-canada', destination: '/xero-accounting-canada', permanent: true },
            { source: '/home', destination: '/', permanent: true },
            { source: '/our-services', destination: '/', permanent: true },
            { source: '/clients', destination: '/', permanent: true },
            { source: '/bookkeeping', destination: '/', permanent: true },
            { source: '/speak-with-a-pro', destination: '/pricing', permanent: true },
            { source: '/chartered-professional-accountant', destination: '/', permanent: true },
            { source: '/online-accounting-packages', destination: '/pricing', permanent: true },
            { source: '/nelson-cpa-services', destination: '/', permanent: true },
            {
                source: '/blog/5653',
                destination: '/blog/how-to-use-float-credit-cards',
                permanent: true,
            },
            {
                source: '/blog/quickbooks-vs-xero-a-comparative-analysis-for-canadian-smes',
                destination: '/blog/xero-vs-quickbooks-canada',
                permanent: true,
            },
            {
                // Specific redirect for Regulation 105 (Location changed)
                source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/regulation-102-105-withholdings-for-payments-to-non-residents-canada',
                destination: '/regulation-105-refund',
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

