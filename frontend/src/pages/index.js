import { Inter } from 'next/font/google'
import React from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      DNA Engineering Full-Stack Internship Home Assignment
   
    </main>
  )
}
