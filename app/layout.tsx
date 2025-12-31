import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import '../src/index.css';
import '../src/views/Home.css';
import '../src/views/Pricing.css';
import '../src/views/Blog.css';
import '../src/views/BlogPost.css';
import '../src/components/HeroBackground.css';
import Layout from '../src/components/Layout';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
    title: 'LedgerLogic',
    description: 'Accounting made simple.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <body>
                <Layout>
                    {children}
                </Layout>
            </body>
        </html>
    );
}
