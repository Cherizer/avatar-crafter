import './globals.css'
import './favicon.ico'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AvatarCrafter | Profile picture generator',
  description: 'Made by Einars Sijats',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="preload" href="https://fonts.googleapis.com" />
        <link rel="preload" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&family=Poppins:wght@500&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}</body>
      
    </html>
  )
}
