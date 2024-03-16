import React from 'react'
import Cis from './components/Cis'
import Navbar from '@/app/(Home)/components/Navbar'
import Shopgo from './components/Shopgo'
import Back from '@/components/Back'


export default function Landing() {
  return (
    <div className="bg-white dark:bg-zinc-800">
      <div className="mx-auto overflow-hidden">
    <Navbar />
    <Back />
    <Cis />
    <hr className="h-px mt-4 mb-8 bg-amber-300 border-0  max-w-full"></hr>
    <Shopgo />
    </div>
    </div>
  )
}
