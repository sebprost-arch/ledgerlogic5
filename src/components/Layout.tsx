"use client";

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    // Check if we are on the landing page
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
    // Note: usePathname from next/navigation is better for Next.js 13+ app dir but Layout component might be used in a way that requires client component.
    // The Layout.tsx imports React so it is likely a client component or compatible.
    // However, in app directory, `layout.tsx` is server by default but this is `src/components/Layout.tsx` used by `app/layout.tsx`.
    // Let's check imports. `app/layout.tsx` uses it.
    // If I use `usePathname`, I must make this a client component ("use client").
    // But `Navbar` and `Footer` might need server context? Usually not.
    // Let's try "use client" approach or just simple conditional rendering passed from parent? 
    // Parent `app/layout.tsx` is a Server Component. It can't easily pass pathname without middleware or client wrap.
    // So making `Layout.tsx` a client component is the standard way.

    // BUT, `app/layout.tsx` imports `Layout`. 
    // Let's check `src/components/Layout.tsx` again. It has no "use client".
    // I will add "use client" and usePathname.

    return (
        <LayoutContent>{children}</LayoutContent>
    );
};

// Sub-component to handle hook usage
import { usePathname } from 'next/navigation';

const LayoutContent: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const pathname = usePathname();
    const isLandingPage = pathname === '/saas-finance-system' || pathname === '/ecommerce-finance-system';

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {!isLandingPage && <Navbar />}
            <main style={{ flex: 1 }}>
                {children}
            </main>
            {!isLandingPage && <Footer />}
        </div>
    );
}

export default Layout;
