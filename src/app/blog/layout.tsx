import React from 'react'

export const metadata = {
  title: "Blog",
  description:
    "Read our latest articles and insights on web development, design, digital marketing, and technology trends.",
  openGraph: {
    url: "https://www.alamondai.com/blog",
    title: "Alamondai | Blog",
    description: "Read our latest articles and insights on web development, design, digital marketing, and technology trends.",
    siteName: "Alamondai",
    images: [
      {
        url: "https://blog.alamondai.com/seo-image.png",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function layout({ children, }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}
