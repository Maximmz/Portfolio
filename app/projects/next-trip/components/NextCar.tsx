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
import Link from 'next/link';

export default function NextCar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getImageForIndex = (index: any) => {
    switch (index) {
      case 0:
        return 'https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814626/NextTrip-Landing-1_nbleby.jpg';
      case 1:
        return 'https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814623/Destinations_oqbgpu.jpg';
      case 2:
        return 'https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814624/Locations_zs4gbv.jpg';
      case 3:
        return 'https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814624/Hotels_nuawzi.jpg';
      case 4:
        return 'https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814623/Hotel_gu5hcw.jpg';
      default:
        return 'https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814626/NextTrip-Landing-1_nbleby.jpg';
    }
  };

  return (
    <div className="mx-auto px-4 md:px-8 lg:px-16 max-w-screen-lg pt-4">
     
        <a target="_blank" className="text-amber-300 flex justify-center scroll-m-20 text-2xl pb-0 font-extrabold tracking-tight lg:text-5xl lg:pb-4 underline underline-offset-8" href="https://github.com/Maximmz/NextTripFinal" rel="https://github.com/Maximmz/NextTripFinal">
        <span>NextTrip Client</span> <span className="ps-2"><FaGithub /></span>
        </a>
        
      
      <div className="flex flex-col items-center">
        <Carousel className="w-full lg:w-[80vh] h-[50vh] relative">
          <CarouselContent className="relative">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-0">
                      <Image
                        src={getImageForIndex(index)}
                        alt={`Image ${index + 1}`}
                        width={1000}
                        height={500}
                        loading="lazy"
                      />
                    </CardContent>
                  </Card>
                </div>
                <div className="flex justify-center mt-2">
                  {[0, 1, 2, 3, 4].map((num) => (
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
      The frontend, consisting of both the client-facing interface and the administrative dashboard, provides a seamless user experience with intuitive navigation and visually appealing design elements.
         Users can easily browse through a curated selection of destinations, each accompanied by detailed information and stunning imagery to inspire their travel plans.
          The booking functionality allows users to reserve accommodations directly from the platform, streamlining the travel planning process.
    </p>
    <div className="flex justify-center">
    <a target="_blank" className=" inline-block scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-4" href="https://github.com/Maximmz/NextTripFinal" rel="https://github.com/Maximmz/NextTripFinal">
    <Button borderRadius="1.75rem" className="bg-amber-300 text-black text-xl font-bold border-4 border-neutral-200 dark:border-zinc-800" href="https://github.com/Maximmz/NextTripFinal">
       <span>View Client Repository</span>
      </Button>
        </a>
        </div>
    </div>
  );
}