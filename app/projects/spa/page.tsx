import React from 'react'
import Weather from './components/Weather'
import Navbar from '@/app/(Home)/components/Navbar'
import Back from '@/components/Back'

export default function Spa() {
  return (
    <div className="bg-white dark:bg-zinc-800">
      <div className="mx-auto overflow-hidden">
      <Navbar />
      <Back />
      <Weather />
      </div>
    </div>
  )
}
