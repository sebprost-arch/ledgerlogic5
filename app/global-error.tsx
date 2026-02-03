
'use client';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html>
            <body>
                <div className="flex min-h-screen flex-col items-center justify-center bg-white p-8 text-center">
                    <h2 className="mb-4 text-2xl font-bold text-gray-900">Critical Error</h2>
                    <p className="mb-6 text-gray-600">
                        A critical error occurred preventing the application from loading.
                    </p>
                    <button
                        onClick={() => reset()}
                        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                    >
                        Try again
                    </button>
                </div>
            </body>
        </html>
    );
}
