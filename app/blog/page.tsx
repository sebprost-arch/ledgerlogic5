import { Suspense } from 'react';
import BlogContent from '../../src/views/Blog';

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BlogContent />
        </Suspense>
    );
}
