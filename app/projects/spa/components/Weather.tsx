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

export default function Weather() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getImageForIndex = (index: any) => {
    switch (index) {
      case 0:
        return 'https://res.cloudinary.com/dvvcrxzud/image/upload/v1709899658/Weather1_p23ooc.jpg';
      case 1:
        return 'https://res.cloudinary.com/dvvcrxzud/image/upload/v1709899658/Weather2_vnpftn.jpg';

      default:
        return 'https://res.cloudinary.com/dvvcrxzud/image/upload/v1709899658/Weather1_p23ooc.jpg';
    }
  };

  return (
    <div className="mx-auto px-4 md:px-8 lg:px-16 max-w-screen-lg pt-4">
     
        <a target="_blank" className="flex text-amber-300 justify-center scroll-m-20 text-2xl pb-0 font-extrabold tracking-tight lg:text-5xl lg:pb-4 underline underline-offset-8" href="https://github.com/Maximmz/Weather" rel="https://github.com/Maximmz/Weather">
        <span>Weather Application</span> <span className="ps-2"><FaGithub /></span>
        </a>
        
      
      <div className="flex flex-col items-center">
        <Carousel className="w-full lg:w-[80vh] h-[50vh] relative">
          <CarouselContent className="relative">
            {Array.from({ length: 2 }).map((_, index) => (
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
                  {[0, 1].map((num) => (
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
          <CarouselPrevious className="absolute left-0 top-1/2 transform cursor-pointer" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-x-4 transform cursor-pointer" />
        </Carousel>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      Discover the Weather App, a sleek fusion of Next.js and Tailwind CSS, offering instantaneous access to weather forecasts for any city. 
      With its minimalist design and intuitive search bar, users can effortlessly retrieve meteorological data, 
      powered by Next.js&apos;s speed and Tailwind CSS&apos;s elegance. Whether planning a trip or staying informed, 
      this app provides comprehensive weather insights at your fingertips, delivering timely updates and empowering informed decision-making. 
      Join us in embracing the future of weather forecasting with style and efficiency.
    </p>
    <div className="flex justify-center">
    <a target="_blank" className=" inline-block scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-4" href="https://github.com/Maximmz/Weather" rel="https://github.com/Maximmz/Weather">
    <Button borderRadius="1.75rem" className="bg-amber-300 text-black text-xl font-bold border-4 border-neutral-200 dark:border-zinc-800">
       <span>View Weather Repository</span>
      </Button>
        </a>
        </div>
    </div>
  );
}