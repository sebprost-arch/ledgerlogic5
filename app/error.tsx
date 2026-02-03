
'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex min-h-[400px] flex-col items-center justify-center p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Something went wrong!</h2>
            <p className="mb-6 text-gray-600">
                We apologize for the inconvenience. An unexpected error has occurred.
            </p>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
                className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
            >
                Try again
            </button>
        </div>
    );
}
