"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

export const languages = [
  {
    title: "Next.js",
    description:
      "Next.js is an open-source web development framework providing React-based web applications with server-side rendering and static website generation.",
    link: "https://nextjs.org/",
    image: "https://res.cloudinary.com/dvvcrxzud/image/upload/v1710521223/Nextjs_heccfw.png",
  },
  {
    title: "JavaScript",
    description:
      "JavaScript is a scripting or programming language that allows you to implement complex features on web pages",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    image: "https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814502/JavaScript_nwgojl.png",
  },
  {
    title: "Tailwind",
    description:
      "Tailwind CSS is an open source CSS framework. It does not provide a series of predefined classes for elements, unlike other frameworks",
    link: "https://tailwindcss.com",
    image: "https://res.cloudinary.com/dvvcrxzud/image/upload/v1709915699/tailwind_ttrwnm.png",
  },
  {
    title: "React.js",
    description:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
    link: "https://react.dev",
    image: "https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814503/React_nvxvhg.png",
  },
  {
    title: "Node.js",
    description:
      "Node.js is a cross-platform, open-source JavaScript runtime environment.",
    link: "https://nodejs.org/en",
    image: "https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814504/Node_lyf69w.png",
  },
  {
    title: "Python",
    description:
      "Python is a high-level, general-purpose programming language. Python is dynamically typed and garbage-collected.",
    link: "https://www.python.org/",
    image: "https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814503/Python_xwsnlt.png",
  },
];

export default function Skills() {
  return (
    <section className="flex flex-col justify-center py-5 mt-20">
      <h1 className="text-5xl font-extrabold flex justify-center items-center text-zinc-700 dark:text-zinc-200 py-2 pb-1 mt-5 lg:mt-0 ">My Skills</h1>
      <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={languages} />
    </div>


       
    </section>
  )
}
