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


  return (
    <div className="mx-auto flex flex-col sm:flex-row gap-x-10 px-4 md:px-8 lg:px-16 max-w-screen-lg pt-4">
      <div className="w-4/4 sm:w-2/4">
        <a target="_blank" className="flex text-amber-300 justify-center scroll-m-20 text-2xl pb-0 font-extrabold tracking-tight lg:text-3xl lg:pb-4 underline underline-offset-8" href="https://github.com/Maximmz/DateFilteredExpenses" rel="https://github.com/Maximmz/DateFilteredExpenses">
        <span>Date Filtered Expenses</span> <span className="ps-2 pt-1"><FaGithub /></span>
        </a>
       
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      Date Filtered Expenses is a React.js application designed to assist users in managing their expenses. Users can input dates and corresponding expenses, and the application generates a bar chart representation of the expenses based on the specified dates.
<br></br>
<span className="text-red-500 pe-2">Note:</span>
Please be aware that the Date Filtered Expenses repository is deprecated and no longer actively maintained. It was initially built using Create React App (CRA), but due to changes in dependencies and updates to the React ecosystem, this repository is no longer supported. As a result, the images associated with this project are currently unavailable.
    </p>
    <div className="flex justify-center">
    <a target="_blank" className=" inline-block scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-4" href="https://github.com/Maximmz/DateFilteredExpenses" rel="https://github.com/Maximmz/DateFilteredExpenses">
    <Button borderRadius="1.75rem" className="bg-amber-300 text-black text-xl font-bold border-4 border-neutral-200 dark:border-zinc-800">
       <span>View DFE Repository</span>
      </Button>
        </a>
        </div>
        </div>
        <div className="w-4/4 sm:w-2/4">
        <a target="_blank" className="flex text-amber-300 justify-center scroll-m-20 text-2xl pb-0 font-extrabold tracking-tight lg:text-3xl lg:pb-4 underline underline-offset-8" href="https://github.com/Maximmz/CourseGoalList" rel="https://github.com/Maximmz/CourseGoalList">
        <span>Course Goal List</span> <span className="ps-2 pt-1"><FaGithub /></span>
        </a>
       
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      Course Goal List is a React.js project that serves as a To-Do List specifically tailored for managing course-related goals and tasks. Users can add, edit, and delete goals for their courses, providing an organized approach to their studies.
<br></br>
<span className="text-red-500 pe-2">Note:</span>
Please note that the Course Goal List repository is deprecated and no longer actively maintained. Initially built using Create React App (CRA), this repository is no longer supported due to changes in dependencies and updates to the React ecosystem. Consequently, the images associated with this project are currently unavailable.
    </p>
    <div className="flex justify-center">
    <a target="_blank" className=" inline-block scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-4" href="https://github.com/Maximmz/CourseGoalList" rel="https://github.com/Maximmz/CourseGoalList">
    <Button borderRadius="1.75rem" className="bg-amber-300 text-black text-xl font-bold border-4 border-neutral-200 dark:border-zinc-800">
       <span>View CGL Repository</span>
      </Button>
        </a>
        </div>
        </div>
    </div>
  );
}