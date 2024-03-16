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

export default function NextDashb() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getImageForIndex = (index: any) => {
    switch (index) {
      case 0:
        return 'https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814622/DashboardLogin_k1o363.jpg';
      case 1:
        return 'https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814621/Dashboard_lsdde9.jpg';
      case 2:
        return 'https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814621/DashboardHotels_cdwqzj.jpg';
      case 3:
        return 'https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814622/DashboardRooms_oqbxjl.jpg';
      case 4:
        return 'https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814621/DashboardBookings_xlqsup.jpg';
      default:
        return 'https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814622/DashboardLogin_k1o363.jpg';
    }
  };

  return (
    <div className="mx-auto px-4 md:px-8 lg:px-16 max-w-screen-lg">
     
        <a target="_blank" className="text-amber-300 flex justify-center scroll-m-20 text-2xl pb-0 font-extrabold tracking-tight lg:text-5xl lg:pb-4 underline underline-offset-8" href="https://github.com/Maximmz/NextTrip-Dashboard" rel="https://github.com/Maximmz/NextTrip-Dashboard">
        <span>NextTrip Dashboard</span> <span className="ps-2"><FaGithub /></span>
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
      On the backend, Express.js facilitates robust server-side logic and RESTful API endpoints for handling user requests, authentication, and data retrieval. 
        MongoDB serves as the database management system, efficiently storing and managing vast amounts of destination information, user data, and booking details.
         The administrative dashboard, accessible to authorized users, offers comprehensive insights and management tools to monitor bookings, track user interactions, and manage content.
    </p>
    <div className="flex justify-between">
    <a target="_blank" className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-4" href="https://github.com/Maximmz/NextTrip-Dashboard" rel="https://github.com/Maximmz/NextTrip-Dashboard">
    <Button borderRadius="1.75rem" className="bg-amber-300 text-black text-lg font-bold border-4 border-neutral-200 dark:border-zinc-800">
       <span>Dashboard Repository</span>
      </Button>
        </a>
        <a target="_blank" className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-4" href="https://github.com/Maximmz/NextTrip-Backend" rel="hhttps://github.com/Maximmz/NextTrip-Backend">
    <Button borderRadius="1.75rem" className="bg-amber-300 text-black text-lg font-bold border-4 border-neutral-200 dark:border-zinc-800">
       <span>View API Repository</span>
      </Button>
        </a>
        </div>
    </div>
  );
}