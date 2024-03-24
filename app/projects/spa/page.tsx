import React from 'react'
import Weather from './components/Weather'
import Navbar from '@/app/(Home)/components/Navbar'
import Back from '@/components/Back'
import Others from './components/Others'

export default function Spa() {
  return (
    <div className="bg-white dark:bg-zinc-800">
      <div className="mx-auto overflow-hidden">
      <Navbar />
      <Back />
      <Weather />
      <hr className="h-px mt-4 mb-8 bg-amber-300 border-0 max-w-full"></hr>
      <Others />
      </div>
    </div>
  )
}
