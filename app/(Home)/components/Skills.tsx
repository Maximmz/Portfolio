"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

export const languages = [
  {
    title: "Next.js",
    description:
      "Full-Stack",
    link: "https://nextjs.org/",
    image: "https://res.cloudinary.com/dvvcrxzud/image/upload/v1710521223/Nextjs_heccfw.png",
  },
  {
    title: "JavaScript",
    description:
      "Front-end",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    image: "https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814502/JavaScript_nwgojl.png",
  },
  {
    title: "Tailwind",
    description:
      "Front-end",
    link: "https://tailwindcss.com",
    image: "https://res.cloudinary.com/dvvcrxzud/image/upload/v1709915699/tailwind_ttrwnm.png",
  },
  {
    title: "React.js",
    description:
      "Front-end",
    link: "https://react.dev",
    image: "https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814503/React_nvxvhg.png",
  },
  {
    title: "Node.js",
    description:
      "Back-end",
    link: "https://nodejs.org/en",
    image: "https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814504/Node_lyf69w.png",
  },
  {
    title: "Python",
    description:
      "GPL",
    link: "https://www.python.org/",
    image: "https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814503/Python_xwsnlt.png",
  },
  {
    title: "PostgreSQL",
    description:
      "Database",
    link: "d",
    image: "https://res.cloudinary.com/dvvcrxzud/image/upload/v1710955709/Postgresql_bldksq.png",
  },
  {
    title: "MongoDB",
    description:
      "Database",
    link: "f",
    image: "https://res.cloudinary.com/dvvcrxzud/image/upload/v1709914059/mongodb_vbl0zp.png",
  },
];

export default function Skills() {
  return (
    <section className="flex flex-col justify-center py-5 mt-20">
      <h1 className="text-5xl font-extrabold flex justify-center items-center text-zinc-700 dark:text-zinc-200 py-2 pb-1 mt-5 lg:mt-0 ">My Skills</h1>
      <div className="max-w-full max-h-full mx-auto px-2">
      <HoverEffect items={languages} />
    </div>


       
    </section>
  )
}
