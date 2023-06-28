import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Hero from './components/Hero' 
import React, { useEffect, useState } from 'react'
import Loading from './Loading'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const [loading, setLoading] = useState(true);
  
  
  useEffect(() => {
    // Simulate an asynchronous task
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <> 
      <Hero />  
    </>
  )
}
