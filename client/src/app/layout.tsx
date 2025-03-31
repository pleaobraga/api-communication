import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Post App',
  description: 'Studies about API'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body className="bg-slate-200">
        <div className="flex flex-col mx-auto max-w-6xl my-10 p-4 pb-10 bg-white rounded-4xl">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
