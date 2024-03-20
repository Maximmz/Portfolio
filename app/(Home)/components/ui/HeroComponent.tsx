"use client"
import React from 'react';
import { Spotlight } from "./Spotlight";
import Link from 'next/link';

export default function HeroCom() {
  return (
    <div className="h-[35rem] sm:h-[25rem] w-full rounded-md flex md:items-center md:justify-center bg-zinc-700 antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
      />

      <div className="gap-y-5 flex flex-col justify-center items-center">
        <h1 className="pt-5 w-8/12 ps-5 text-slate-200 text-lg md:text-3xl font-bold leading-snug tracking-wide">
        Nice to meet you!
         <br></br>
         I&apos;m Mazin Jasim, a Full-Stack Developer
   
        </h1>
        <h2 className="w-8/12 lg:text-lg ps-5 pb-6 text-slate-200 text-lg font-bold leading-snug tracking-wide">
        As a passionate Full-Stack web developer, I specialize in crafting modern Single Page Web Applications that seamlessly blend cutting-edge technology with a sleek and user-friendly design, bringing your digital vision to life.
        </h2>
        <Link href="mailto:mazinjasim066@gmail.com" className="text-slate-200 inline-block text-2xl py-2 px-4 rounded-lg bg-transparent border-2 border-amber-300 hover:border-amber-500">
        Email me
        </Link>
      </div>
    </div>
  );
}