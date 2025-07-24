import { Metadata } from "next";

export const meta: Metadata = {
  metadataBase: new URL('http://alamondai.com'),
  icons: {
    icon: '/logo.png',
  },
  title: {
    default: "Alamondai | Web Development,Mobile App Design & Design Services",
    template: "%s | Alamondai",
  },
  description: "Professional web development, design, and digital marketing services for businesses of all sizes.",
  keywords: [
    "web development",
    "web design",
    "Alamondai",
    "software development",
    "UI/UX design",
    "digital marketing",
    'Software Development',
    'Fullstack Development',
    'Reactjs',
    'Nodejs',
    'Frontend Developer',
    'Ethiopia Developer',
    'Flutter Developer',
    'Software Developer in Ethiopia',
    'Reactjs Developer in Ethiopia',
    'Ethiopia',
    'Natnael Engeda',
    'Natty Engeda',
    'Natnael',
    'Natty',
    'Alamondai',
    'Alamondai Software Development',
    'Alamondai Software Development Ethiopia',
    'Alamondai Software Development Addis Ababa',
    'Alamondai.com',
    'Ethiopia Software Development',
    'Ethiopia Software Development Company',
  ],
  authors: [{ name: "Alamondai" }],
  creator: "Alamondai",
  openGraph: {
    url: "https://www.alamondai.com",
    title: "Alamondai | Web Development & Design Services",
    description: "Professional web development, design, and digital marketing services for businesses of all sizes.",
    siteName: "Alamondai",
    images: [
      {
        url: "/seo-image.jpg",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alamondai | Web Development & Design Services",
    description: "Professional web development, design, and digital marketing services for businesses of all sizes.",
    images: ['/seo-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['nattynengeda@gmail.com', 'https://portfolio.alamondai.com']
    }
  },
  appleWebApp: {
    title: 'Alamondai',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/logo.png'
    ]
  }
}