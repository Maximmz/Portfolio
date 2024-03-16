"use client";
import React from 'react';
import Image from 'next/image';

export default function Services() {
  return (
    <section className="py-0 pt-2 md:pt-0">
    <div className="rounded-lg flex flex-col items-center pt-10 gap-y-10">
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl py-2 text-zinc-700 dark:text-zinc-200">
        My Services
      </h1>
  <div className="flex flex-col xl:flex-row justify-center items-center pb-20">
   <div className="max-w-md max-h-[570px] xl:h-[700px] rounded overflow-hidden bg-amber-300 dark:bg-amber-300 mx-5 gap-y-10 mb-5 ">
   <Image
      src="https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814503/Frontend_gp4yhe.jpg"
      width={1200}
      height={500}
      style= {{
        maxWidth:'100%',
        height: 'auto',
      }}
      alt="Picture of the author"
    />
    <div className="px-6 py-4">
    <div className="font-bold  flex justify-center text-lg md:text-3xl mb-2 text-black">Frontend Development</div>
    <p className="text-black text-base">
    Unlock visually stunning and responsive websites that captivate and engage. Specializing in modern technologies like HTML5, CSS3, and JavaScript frameworks, I create seamless user experiences that are not only beautiful but also accessible and user-friendly across all devices. Let&apos;s bring your ideas to life with cutting-edge frontend solutions.
    </p>
  </div>

</div>
<div className="max-w-md max-h-[570px] xl:h-[700px] rounded overflow-hidden bg-amber-300 dark:bg-amber-300  mx-5 gap-y-10 mb-5 ">
<Image
      src="https://res.cloudinary.com/dvvcrxzud/image/upload/v1709814503/Backend_o7olk7.jpg"
      width={1200}
      height={500}
      style= {{
        maxWidth:'100%',
        height: 'auto',
      }}
      alt="Picture of the author"
    />
  <div className="px-6 py-4">
    <div className="font-bold flex justify-center text-lg md:text-3xl mb-2 text-black">Backend Development</div>
    <p className="text-black text-base">
    Elevate your applications with efficient and scalable backend solutions centered around RESTful API development. Utilizing the latest server technologies, I specialize in crafting APIs that facilitate seamless communication between your frontend and database. My approach prioritizes clean, maintainable code, setting a solid foundation for your application&apos;s functionality and future growth.
    </p>
  </div>
</div>
</div>





    </div>
    </section>
  )
}