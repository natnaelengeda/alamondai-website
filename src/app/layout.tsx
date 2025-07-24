import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

// Metadata
import { meta } from "@/meta/meta"

// Styles
import './globals.css';
import Provider from "./provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}



