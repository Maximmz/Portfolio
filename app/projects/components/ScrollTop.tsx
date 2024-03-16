"use client"
import React from 'react'
import { Button } from './ui/moving-border'

export default function Scroll() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

  return (
    <div className="flex justify-center">
       
         <Button borderRadius="1.75rem" className="bg-amber-300 text-black text-xl font-bold border-4 border-neutral-200 dark:border-zinc-800" onClick={scrollToTop}>
        Back to top 
      </Button>
 
    </div>
  )
}
