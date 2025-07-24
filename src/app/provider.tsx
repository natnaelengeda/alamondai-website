"use client";
import React, { useEffect } from 'react'

// Components
import Header from "@/components/header"
import Footer from "@/components/footer"

// Theme
import { ThemeProvider } from "@/components/theme-provider"

// Toast
import { Toaster } from 'react-hot-toast';

// Firebase
import { analytics, firebase } from '@/lib/firebase';

// React Query
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export const queryClient = new QueryClient()

export default function Provider({ children }: { children: React.ReactNode }) {

  // Initialize Firebase
  const InitializeFirebase = () => {
    try {
      firebase;
      analytics;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    InitializeFirebase();
  }, []);


  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem disableTransitionOnChange>
      <QueryClientProvider
        client={queryClient}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main
            className="flex-1 w-full mx-auto">
            {children}
            <Toaster />
          </main>
          <Footer />
        </div>
      </QueryClientProvider>
    </ThemeProvider >
  )
}
