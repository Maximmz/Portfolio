import React from 'react'
import NextCar from './components/NextCar'
import NextDashb from './components/NextDashb'
import Navbar from '@/app/(Home)/components/Navbar'
import Back from '@/components/Back'

export default function NextTrip() {
  return (
    <div className="bg-white dark:bg-zinc-800">
      <div className="mx-auto overflow-hidden">
        <Navbar />
        <Back />
        <NextCar />
        <hr className="h-px mt-4 mb-8 bg-amber-300 border-0 max-w-full"></hr>
        <NextDashb />
        </div>
    </div>
  )
}
