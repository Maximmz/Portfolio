import Link from 'next/link';
import React from 'react'
import { FaArrowLeft } from "react-icons/fa";

export default function Back() {
  return (
    <Link href="/projects">
    <div className="ps-3 absolute pt-2 invisible md:visible underline flex opacity-80 text-zinc-800 dark:text-amber-300 text-xl">
        <FaArrowLeft className="pt-2 text-xl"/>
        Projects
    </div>
    </Link>
  )
}
