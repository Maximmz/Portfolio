import Link from 'next/link';
import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Mode } from '@/components/ui/Mode'


export default function Navbar() {
    const socials = [
        {
            Link: "https://www.linkedin.com/in/mazin-jasim-3ba3a8205",
            Label: "LinkedIn",
            Icon: FaLinkedin
        },
        {
            Link: "https://github.com/Maximmz",
            Label: "GitHub",
            Icon: FaGithub
        }
    ]
  return (
    <section className="bg-zinc-600 dark:bg-zinc-900">
    <nav className="max-w-[1500px] py-10 flex justify-between">
        <h1 className="ps-2 lg:ps-40 pt-10 md:pt-0 mt-3 lg:mt-0 text-lg sm:text-2xl md:text-4xl font-bold"> 
        <div className="mt-4 flex flex-row">
        <Link href="/" className="mx-4">
        <span className="bg-clip-text text-transparent font-extrabold bg-amber-300">
             Home
           </span>
        </Link>
        <Link href="/projects" className="mx-4">
        <span className="bg-clip-text text-transparent font-extrabold  bg-amber-300">
             Projects
           </span>
        </Link>
      </div>
  </h1>
        <div className=" flex flex-col gap-y-2 sm:flex-row gap-0 lg:gap-5 ml-auto">
           
        <Mode />
       {socials.map((social, index)=> {
        const Icon = social.Icon

        return <Link href={social.Link} key={index} aria-label={social.Label} className="text-4xl">
            
            <Icon className="rounded-full text-amber-300 bg-black hover:scale-110 hover:text-black hover:bg-amber-300 hover:delay-150 mr-1 md:mr-0"/>
        </Link>
       })}
        </div>

    </nav>
    </section>
  )
}
