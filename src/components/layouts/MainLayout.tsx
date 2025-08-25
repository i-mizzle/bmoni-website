// components/Layout.tsx
import { ReactNode } from 'react'

import { Fraunces, Inter } from "next/font/google";
import Footer from '../partials/Footer';
import Header from '../partials/Header';
// import CrispChat from '../elements/CrispChat';
import Head from 'next/head';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fraunces', 
  display: 'swap', 
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // choose the weights you need
  display: 'swap',
  variable: '--font-inter',
})

interface LayoutProps {
  children: ReactNode
}
      

export default function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>BMoni</title>
        <meta name="description" content="Powered by stablecoin and AI technology to help you earn, spend, save, and grow, all without banking limitations getting in your way." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className={`${inter.variable} ${fraunces.variable} min-h-screen`}>
        <Header />
        <main className="mx-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}
