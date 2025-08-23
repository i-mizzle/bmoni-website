// components/Layout.tsx
import { ReactNode } from 'react'

import { Fraunces, Inter } from "next/font/google";
import Footer from '../partials/Footer';
import Header from '../partials/Header';
import CrispChat from '../elements/CrispChat';

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
      <div className={`${inter.variable} ${fraunces.variable} min-h-screen`}>
        <Header />
        <main className="mx-auto">{children}</main>
        <Footer />
      </div>
      <CrispChat />
    </>
  )
}
