import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { Navbar } from '@/components/common/Navbar'
import { Footer } from '@/components/common/Footer'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://geekhub-uiet.club'),
  title: {
    template: 'GeekHub - UIET',
    default:'GeekHub - Learn , Grow, Teach',
  },
  description: "GeekHub: Learn, teach, grow. A vibrant tech community for enthusiasts, developers, and entrepreneurs.",
  keywords: [
    'GeekHub', 'Coding Culture', 'Tech Education', 'Online Coding Contest', 'Programming Workshops', 
    'Web Development', 'Android Development', 'Data Structure & Algorithms', 
    'Artificial Intelligence', 'Machine Learning', 'Designing', 'Cyber Security', 
    'Web3 & Blockchain', 'Game Development', 'Geek Community', 'UIET MDU Rohtak', 
    'Technology Workshops', 'Coding Community', 'Tech Awareness', 'Diversity & Inclusion', 
    'GeekHub Club', 'UIET MDU Community', 'Software Developer', 'Testimonials', 'Growth and Learning',
    'University Of Engineering And Technology, Rohtak','Maharishi Dayanand University , Rohtak',
    'University Of Engineering And Technology','Maharishi Dayanand University ','Hub Geek',
    'Geeks for Geeks','Modi','chai wala','Web dev','Learn with Geeks'
],
  publisher: 'GeekHub',
  applicationName: 'GeekHub-community',
  verification: {
    google: 'google',
    other: {
      me: ['my-email', 'my-link','github'],
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GeekHub - Your Gateway to Mastering Coding Skills',
    description: 'GeekHub is a dynamic online platform designed to revolutionise the way developers learn, grow, and excel in their coding journey',
    creator: '@AnkushMehra',
    images: ['/logo.jpg'],
  },
  appLinks: {
    ios: {
      url: 'https://geekhub-uiet.club',
      app_store_id: 'DevChallenge',
    },
    android: {
      package: 'https://geekhub-uiet.club',
      app_name: 'DevChallenge',
    },
    web: {
      url: 'https://geekhub-uiet.club',
      should_fallback: true,
    },
  },
  openGraph: {
    images: ['/logo.jpg'],
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col justify-center items-center bg-white max-w-screen overflow-x-hidden`}>
       <Navbar/>
        {children}
        <Footer/>
        <Analytics />
      </body>
    </html>
  )
}
