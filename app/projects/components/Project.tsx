"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { TracingBeam } from "./ui/tracing-beam";
import Link from "next/link";
import { Button } from "./ui/moving-border";



interface Refs {
  [key: string]: React.MutableRefObject<HTMLElement | null>;
}

// Languages to display in title.
const languages = [
  {
    id: 1,
    name: "Next.js",
    image:
      "https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814502/Next_rxefce.png",
  },
  {
    id: 2,
    name: "React.js",
    image:
      "https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814503/React_nvxvhg.png",
  },
  {
    id: 3,
    name: "HTML",
    image:
      "https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814502/Html_vxkquh.png",
  },
  {
    id: 4,
    name: "CSS",
    image:
      "https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814501/CSS_gkvqbc.png",
  },
  {
    id: 5,
    name: "Node",
    image:
      "https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814504/Node_lyf69w.png",
  },
  {
    id: 6,
    name: "Express",
    image:
      "https://res.cloudinary.com/dvvcrxzud/image/upload/v1709915141/expressss_x8cecd.png",
  },
  {
    id: 7,
    name: "MongoDB",
    image:
      "https://res.cloudinary.com/dvvcrxzud/image/upload/v1709914059/mongodb_vbl0zp.png",
  },
  {
    id: 8,
    name: "Tailwind",
    image:
      "https://res.cloudinary.com/dvvcrxzud/image/upload/v1709915699/tailwind_ttrwnm.png",
  },
  {
    id: 9,
    name: "Bootstrap CSS",
    image:
      "https://res.cloudinary.com/dvvcrxzud/image/upload/v1709915700/bootstrap_x5bgoe.png",
  },
];

export default function Project() {
  // Defining refs for scrolling
 const refs: Refs = {
    "NextTrip": useRef(null),
    "Landing-Clones": useRef(null),
    "Single-Page-Applications": useRef(null)
  };
  
  // Scroll ref function

  const scrollToRef = (ref: React.MutableRefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (

    // Scroll ref buttons
    <div className="bg-white dark:bg-zinc-800">
      <div className="flex justify-center items-center gap-x-4 pt-5">
      <Button borderRadius="1.75rem" className="bg-amber-300 text-black text-xl font-bold border-4 border-neutral-200 dark:border-zinc-800" onClick={() => scrollToRef(refs["NextTrip"])} >
        NextTrip
      </Button>
      <Button borderRadius="1.75rem" className="bg-amber-300 text-black text-xl font-bold border-4 border-neutral-200 dark:border-zinc-800" onClick={() => scrollToRef(refs["Landing-Clones"])} >
        Clones
      </Button>
      <Button borderRadius="1.75rem" className="bg-amber-300 text-black text-xl font-bold border-4 border-neutral-200 dark:border-zinc-800" onClick={() => scrollToRef(refs["Single-Page-Applications"])} >
        SPA's
      </Button>
      </div>
      <hr className="h-px mt-4 mb-8 bg-amber-300 border-0 max-w-full"></hr>
      
   
   {/* Main body being displayed */}
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10 items-center">
             <Link href={`/projects/${item.slug}`} className="cursor-default">
             <h4 ref={refs[item.badge] as React.MutableRefObject<HTMLHeadingElement>} className=" bg-zinc-700 text-zinc-200 font-bold border-4 rounded-full text-xl w-full h-16 flex justify-center pt-3 px-4 py-1 mb-4 cursor-default hover:cursor-default">
              {item.badge}
            </h4>
             </Link>
           
            <div className="flex justify-center pb-4 gap-3">
              {item.title}
            </div>

            <div className="flex justify-center flex-col items-center text-sm lg:text-lg prose prose-sm dark:prose-invert">
              {item?.image && (
                              <div className="relative mb-10">
                              <Image
                                src={item.image}
                                alt="blog thumbnail"
                                height="1000"
                                width="1000"
                                className="rounded-lg object-cover opacity-50"
                              />
                            </div>
            
              )}
              <div className="pb-4">
              {item.description}

              </div>
              <Link href={`/projects/${item.slug}`}>
             <h2 className= "bg-amber-300 text-black font-bold border-4 rounded-full px-2 text-xl w-fit pt-1 mb-4 hover:scale-105 hover:border-rounded">
              View {item.slug}
            </h2>
            <div className="w-full h-2 mb-1 bg-zinc-400 -translate-y-3 rounded-full cursor-default hover:cursor-default"></div>
            <div className="w-full h-2 bg-zinc-500 rounded-full -translate-y-3 cursor-default hover:cursor-default"></div>

             </Link>
            </div>
      <hr className="h-1 mt-4 mb-2 bg-amber-300 border-0 max-w-full"></hr>
          </div>
          
        ))}
        
      </div>
    </TracingBeam>
     </div>
  );
}


// Projects being displayed

const dummyContent = [
  {
    title:  ( <AnimatedTooltip
      items={languages
        .filter((language) => [7, 6, 2, 5].includes(language.id))
        .map((item) => ({
          id: item.id,
          name: item.name,
          image: item.image,
        }))}
    />
  ),
    description: (
      <div>
        <p>
        NextTrip is a comprehensive Full Stack Web Application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
         It serves as a platform for users to explore various picturesque destinations in Northern Pakistan and conveniently book accommodations corresponding to their chosen locations.
          The project encompasses three key components: the frontend, backend, and database.
        </p>
        
      </div>
    ),
    badge: "NextTrip",
    slug: "next-trip", // Add slug for the project
    image:
      "https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814626/NextTrip-Landing-1_nbleby.jpg",

  },
  {
    title:  ( <AnimatedTooltip
      items={languages
        .filter((language) => [3,4,9].includes(language.id))
        .map((item) => ({
          id: item.id,
          name: item.name,
          image: item.image,
        }))}
    />
  ),
    description: (
      <div>
        <p>
        The CISPL and SHOPGO Landing Page Clone are a meticulous reproduction of the websites
         Crafted using HTML and Bootstrap CSS, these clones faithfully recreate the sleek and professional design of the original websites. 
         Every element of the landing page, from the navigation menu to the footer, has been carefully crafted to ensure seamless user experience across devices. 
         Moreover, special attention has been given to making the websites fully responsive, ensuring optimal viewing and interaction on mobile devices as well.
        </p>
      </div>
    ),
    badge: "Landing-Clones",
    slug: "landing-clones",
    image:
      "https://res.cloudinary.com/dvvcrxzud/image/upload/v1709899638/Shop1_qhrnph.jpg",
  },
  {
    title:  ( <AnimatedTooltip
      items={languages
        .filter((language) => [1,8].includes(language.id))
        .map((item) => ({
          id: item.id,
          name: item.name,
          image: item.image,
        }))}
    />
  ),
    description: (
      <div>
        <p>
         Single Page Applications such as "Weather App", "Date Filtered Expenses"
         and "Course Goal List" making use of different languages, such as 
         Weather App making use of Next.js and Tailwind, while Date Filtered 
         Expenses and Course Goal List make use of React.js. DFE and CGL are pretty
         outdated (Made in 2021 according to Github repository) so only repository
         is provided for the code. Currently different SPA's are also being made.
        </p>
      </div>
    ),
    badge: "Single-Page-Applications",
    slug: "spa",
    image:
      "https://res.cloudinary.com/dvvcrxzud/image/upload/v1709899658/Weather2_vnpftn.jpg",
  },
];