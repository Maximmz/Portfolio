"use client";
import React from 'react';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge"
import { FaArrowRight } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import Image from "next/image";
import { Tabs } from "./ui/tabs";



interface Project {
  id: number;
  name: string;
  image: string;
  description: string;
  works: string;
  route: string;

}

const projects: Project[] = [
  {
    id: 1,
    name: "NextTrip",
    image: "https://res.cloudinary.com/dvvcrxzud/image/upload/v1710356702/logo_patku5.png",
    description: "NextTrip is a comprehensive Full Stack Web Application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
    works: "https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814626/NextTrip-Landing-1_nbleby.jpg",
    route: "projects/next-trip",
  },
  {
    id:2,
    name: "Landing Clones",
    image: "https://res.cloudinary.com/dvvcrxzud/image/upload/v1710357310/CIS_rpgmvz.png",
    description: "CISPL & SHOPGO Landing Page Clones: Faithful recreations of professional & stylish websites. HTML & Bootstrap used for immersive user experiences.",
    works: "https://res.cloudinary.com/dvvcrxzud/image/upload/v1709899648/Cis1_cbgpcw.jpg",
    route: "projects/landing-clones",
  },
  {
    id:3,
    name: "Other Projects",
    image: "https://res.cloudinary.com/dvvcrxzud/image/upload/v1710374380/Weather_App_v2dd9p.png",
    description: "The Weather App, a sleek fusion of Next.js and Tailwind CSS, offering instantaneous access to weather forecasts for any city.",
    works: "https://res.cloudinary.com/dvvcrxzud/image/upload/v1709899658/Weather2_vnpftn.jpg",
    route: "projects/spa",
  }
]

const tabs = projects.map(project => ({
  title: project.name,
  value: project.name,
  content: (
    <div className="w-full h-[60vh] mt-3 sm:mt-12 relative overflow-hidden rounded-2xl p-10 sm:p-10 text-sm md:text-2xl font-bold text-white bg-gradient-to-br from-amber-300 to-amber-700">
      <div className="flex items-start justify-start flex-col sm:flex-row">
      <Image
      src={project.image}
      alt={project.name}
      width= {1000}
      height= {1000}
      className="w-16 h-16 md:w-32 md:h-32"
       />
      <p className="ps-0 md:ps-4 whitespace-nowrap overflow-hidden overflow-ellipsis pt-1 md:pt-8 underline">{project.name}</p>
     
      
       </div>
      <Link href={project.route}><Button size="sm" className="bg-zinc-600 hover:bg-zinc-500 absolute left-1 sm:relative text-zinc-200">View {project.name}</Button></Link> 
       <div className="flex flex-col md:flex-row">
        <div className="w-2/4 ps-4 text-sm absolute right-2 top-2 md:relative">{project.description}</div>
        <div className="w-[400px] md:w-2/4 md:pt-0 md:relative absolute bottom-8 left-0 ">
          <Image 
          src={project.works}
          alt={project.name}
          width={500}
          height={1000}
          className="rounded-3xl"
          />
        </div>
       </div>
    </div>
  )
}));


const ProjectsDisplay = () => {
  return (
    <section>
      <div className="flex flex-col items-center lg:gap-y-0 lg:pt-0 lg:pb-0 ">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pt-2 text-zinc-700 dark:text-zinc-200 pb-0">
          My Projects
        </h1>
        <Link href="/projects">
          <Button className="mt-8 w-full rounded-full hover:bg-zinc-500 mb-4 bg-zinc-600 text-3xl font-bold text-zinc-100">View All Projects</Button>
          </Link>

      </div>
      <div className="[perspective:1000px] pb-96 relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start mt-10">
      <Tabs tabs={tabs} />
    </div>
      
    </section>
  );
};

export default ProjectsDisplay;

