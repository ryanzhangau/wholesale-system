import type { Metadata } from 'next'
import { roboto } from '@/fonts'
import './globals.css'


export const metadata: Metadata = {
  title: 'Anctech Wholesale System',
  description: 'Anctech Wholesale System',
}

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ roboto.className }>{ children }</body>
    </html>
  )
}
