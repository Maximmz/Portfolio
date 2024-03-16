"use client"
import React from 'react';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge"
import { FaArrowRight } from "react-icons/fa";
import { Button } from '@/components/ui/button';

const ProjectsDisplay = () => {
  return (
    <section>
      <div className="flex flex-col items-center lg:gap-y-0 lg:pt-0 lg:pb-0 ">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl py-2 text-zinc-200 pb-0">
          My Projects
        </h1>
        <div className="mt-8">
          <Link href="/projects">
          <Button className="w-full rounded-full hover:bg-zinc-500 mb-4 bg-zinc-600 text-3xl font-bold text-zinc-100">View All Projects</Button>
          </Link>
        <div className="w-full flex items-center justify-center lg:mt-0 ">
       
          <div className="flex md:mt-0 overflow-visible flex-col lg:flex-row pt-2 lg:pt-0 gap-x-4 gap-y-2">
            <Link href="/projects/next-trip">
              <div className="relative group bg-zinc-600 rounded-xl">
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                  <Badge className="md:top-4 h-8 max-w-xl text-xl !pb-2 !m-0 text-black bg-amber-300 md:group-hover:top-2 transition-all duration-700 absolute">
                      <p className="top-1 relative">MERN Application</p>
                    </Badge>
                    <div className="flex m-0 pt-4 md:group-hover:top-10 top-12 md:top-1/3 absolute transition-all duration-1000">
                     
                    
                      <div className="text-black font-bold flex justify-center items-center text-2xl h-12 md:h-36 group-hover:h-10 w-60 rounded-lg px-2 bg-amber-300">
                     
                       NextTrip</div> <div><FaArrowRight className="text-amber-300 mx-2 mt-1 md:mt-14 group-hover:mt-1 text-3xl underline underline-offset-8 relative" /></div>
                    
                    </div>
                  </div>
          
                <img
                  src="https://res.cloudinary.com/dvvcrxzud/image/upload/v1710356702/logo_patku5.png"
                  className="h-[200px] mt-10 max-w-full absolute md:top-1/4 left-1/2 transform -translate-x-1/2 opacity-100 md:opacity-0 top-20 group-hover:top-14 md:group-hover:opacity-100 transition-all duration-1000"
                />
              </div>
            </Link>
            <Link href="/projects/landing-clones">
              <div className="relative group bg-zinc-600 rounded-xl">
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                  <Badge className="md:top-4 h-8 max-w-xl text-xl !pb-2 !m-0 text-black bg-amber-300 md:group-hover:top-2 transition-all duration-700 absolute">
                      <p className="top-1 relative">HTML+CSS-Bootstrap</p>
                    </Badge>
                    <div className="flex m-0 pt-4 md:group-hover:top-10 top-12 md:top-1/3 absolute transition-all duration-1000">
                     
                    
                      <div className="text-black flex font-bold justify-center items-center text-2xl h-12 md:h-36 group-hover:h-10 w-60 rounded-lg px-2 bg-amber-300">
                        Landing Clones </div> <div><FaArrowRight className="text-amber-300 mx-2 mt-1 md:mt-14 group-hover:mt-1 text-3xl underline underline-offset-8 relative" /></div>
                    
                    </div>
                  </div>
          <div className="max-w-full">
          <img
                  src="https://res.cloudinary.com/dvvcrxzud/image/upload/v1710357310/CIS_rpgmvz.png"
                  className="h-[200px] -right-10 mt-10 w-4/12 absolute md:top-1/4 transform -translate-x-1/2 opacity-100 md:opacity-0 top-20 group-hover:top-10 md:group-hover:opacity-100 transition-all duration-1000"
                />

                <img
                  src="https://res.cloudinary.com/dvvcrxzud/image/upload/v1710357310/ShopGOW_duifhc.png"
                  className="h-[200px] mt-10 left-24 w-6/12 absolute md:top-1/4 transform -translate-x-1/2 opacity-100 md:opacity-0 top-16 group-hover:top-10 md:group-hover:opacity-100 transition-all duration-1000"
                />
                </div>
              </div>
            </Link>

            <Link href="/projects/spa">
              <div className="relative group bg-zinc-600 rounded-xl">
                  <div className="flex basis-full flex-col ps-2 p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                  <Badge className="md:top-4 h-8 max-w-xl text-xl !pb-2 !m-0 text-black bg-amber-300 md:group-hover:top-2 transition-all duration-700 absolute">
                      <p className="top-1 relative">React/Next.js App's</p>
                    </Badge>
                    <div className="flex m-0 pt-4 md:group-hover:top-10 top-12 md:top-1/3 absolute transition-all duration-1000">
                     
                    
                      <div className="text-black font-bold flex justify-center items-center text-2xl h-12 md:h-36 group-hover:h-10 w-60 rounded-lg px-2 bg-amber-300">
                        Single Page App's</div> <div><FaArrowRight className="text-amber-300 mt-1 md:mt-14 group-hover:mt-1 text-3xl underline underline-offset-8 relative" /></div>
                    
                    </div>
                  </div>
          
                <img
                  src="https://res.cloudinary.com/dvvcrxzud/image/upload/v1710374380/Weather_App_v2dd9p.png"
                  className=" h-[200px] mt-10 max-w-full absolute md:top-1/4 left-1/2 transform -translate-x-1/2 opacity-100 md:opacity-0 top-20 group-hover:top-10 md:group-hover:opacity-100 transition-all duration-1000"
                />
              </div>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsDisplay;

