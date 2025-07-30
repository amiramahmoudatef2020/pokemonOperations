'use client';

import { ReactNode, Suspense } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import queryClient from '../lib/queryClient';
import ErrorBoundary from '../lib/ErrorBoundary';
import ThemeToggle from '../components/ThemeToggle';
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <ThemeProvider attribute="class" defaultTheme="system">
          <QueryClientProvider client={queryClient}>
            <ErrorBoundary>
              <Suspense
                fallback={<p className="text-center mt-10">Loading App...</p>}
              >
                <main className="min-h-screen p-4 max-w-7xl mx-auto">
                  <div className="flex justify-end mb-6">
                    <ThemeToggle />
                  </div>
                  {children}
                </main>
              </Suspense>
            </ErrorBoundary>
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
