import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ApolloProvider } from '@/lib/apollo-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Podcasts - ClaimClam',
  description: 'Get podcasts from ClaimClam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloProvider>
          {children}
        </ApolloProvider>
      </body>
    </html>
  )
}
