"use client"
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/projects/components/carousel";
import Image from 'next/image';
import { Button } from "@/app/projects/components/ui/moving-border"
import { FaGithub } from "react-icons/fa";


export default function Cis() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getImageForIndex = (index: any) => {
    switch (index) {
      case 0:
        return 'https://res.cloudinary.com/dvvcrxzud/image/upload/v1709899648/Cis1_cbgpcw.jpg';
      case 1:
        return 'https://res.cloudinary.com/dvvcrxzud/image/upload/v1709899648/Cis2_yo91w8.jpg';
      case 2:
        return 'https://res.cloudinary.com/dvvcrxzud/image/upload/v1709899649/Cis3_ahw65e.jpg';
      case 3:
        return 'https://res.cloudinary.com/dvvcrxzud/image/upload/v1709899649/Cis4_oksflc.jpg';
      default:
        return 'https://res.cloudinary.com/dvvcrxzud/image/upload/v1709899648/Cis1_cbgpcw.jpg';
    }
  };

  return (
    <div className="mx-auto px-4 md:px-8 lg:px-16 max-w-screen-lg">
     
        <a target="_blank" className="flex justify-center text-amber-300 scroll-m-20 text-2xl pb-0 font-extrabold tracking-tight lg:text-5xl lg:pb-4 underline underline-offset-8" href="https://github.com/Maximmz/CISPL-landing-clone" rel="https://github.com/Maximmz/CISPL-landing-clone">
        <span>CIS</span> <span className="ps-2"><FaGithub /></span>
        </a>
        
      
      <div className="flex flex-col items-center">
        <Carousel className="w-full lg:w-[80vh] h-[50vh] relative">
          <CarouselContent className="relative">
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-0">
                      <Image
                        src={getImageForIndex(index)}
                        alt={`Image ${index + 1}`}
                        width={1000}
                        height={1000}
                        loading="lazy"
                      />
                    </CardContent>
                  </Card>
                </div>
                <div className="flex justify-center mt-2">
                  {[0, 1, 2, 3].map((num) => (
                    <span
                      key={num}
                      className={currentIndex === num ? 'dark:text-white text-black px-2 py-1 rounded-md cursor-pointer' : 'px-2 py-1 cursor-pointer'}
                      onClick={() => setCurrentIndex(num)}
                    >
                      {index === num ? '●' : '○'}
                    </span>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform cursor-pointer bg-black text-white border-black" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-x-4 transform cursor-pointer bg-black text-white border-black" />
        </Carousel>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      The CISPL Landing Page Clone is a meticulous reproduction of the website for Computer Information Systems Pvt. Ltd. 
        (CISPL), a leading provider of computer-based services.
         Crafted using HTML and Bootstrap CSS, this clone faithfully recreates the sleek and professional design of the original website. 
         With a focus on simplicity and clarity, the clone showcases CISPL&apos;s services, expertise, and commitment to excellence. 
         Every element of the landing page, from the navigation menu to the footer, has been carefully crafted to ensure seamless user experience across devices. 
         Moreover, special attention has been given to making the website fully responsive, ensuring optimal viewing and interaction on mobile devices as well.
    </p>
    <div className="flex justify-center">
    <a target="_blank" className=" inline-block scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-4" href="https://github.com/Maximmz/CISPL-landing-clone" rel="https://github.com/Maximmz/CISPL-landing-clone">
    <Button borderRadius="1.75rem" className="bg-amber-300 text-black text-xl font-bold border-4 border-neutral-200 dark:border-zinc-800">
       <span>View CIS Repository</span>
      </Button>
        </a>
        </div>
    </div>
  );
}