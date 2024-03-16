import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

const ContactMe = () => {
  return (
    <div className="flex mx-auto px-4 max-w-screen-lg bg-zinc-700 text-white gap-x-2 my-10 overflow-hidden">
      <div className="w-6/12 flex flex-col relative bg-zinc-700">
        <div className="pt-6">
          <div className="gap-x-3 flex font-bold text-sm md:text-3xl underline ">
            Connect with me
          </div>
          <div className="mt-6 mb-4 space-y-4">
          <a href="mailto::mazinjasim066@gmail.com">
          <div className="flex gap-x-1 pb-4 hover:text-amber-300">
              <FaEnvelope className="text-lg md:text-2xl" />
              <div>
                <h3 className="text-sm md:text-lg font-semibold">Gmail</h3>
                <p className="text-sm md:text-lg flex relative">mazinjasim066<p className="absolute ps-24 md:ps-32">@gmail.com</p></p>
              </div>
            </div>
            </a>
            <a target='_blank' href="https://www.linkedin.com/in/mazin-jasim-3ba3a8205" rel="https://www.linkedin.com/in/mazin-jasim-3ba3a8205">
            <div className="flex gap-x-1 pb-4 hover:text-amber-300">
              <FaLinkedin className="text-lg md:text-2xl" />
              <div>
                <h3 className="text-sm md:text-lg font-semibold">LinkedIn</h3>
                <p className="text-sm md:text-lg">Connect with me on LinkedIn</p>
              </div>
            </div>
            </a>
            <a target='_blank' href="https://github.com/Maximmz" rel="https://github.com/Maximmz">
            <div className="flex gap-x-1 hover:text-amber-300">
              <FaGithub className="text-lg md:text-2xl" />
              <div className="pb-4">
                <h3 className="text-sm md:text-lg font-semibold ">GitHub</h3>
                <p className="text-sm md:text-lg">Check out my projects on GitHub</p>
              </div>
            </div>
            </a>
          </div>
        </div>
      </div>
      <div className="w-6/12">
        <Image
          src="https://res.cloudinary.com/dvvcrxzud/image/upload/v1710603391/Contact_q4bzal.jpg"
          width={500}
          height={500}
          style={{
            maxWidth: '100%',
            height: '100%',
            borderColor: "#475569",
            borderWidth: '10px',
            transform: "skewX(14deg)",
          }}
          alt="Picture of the author"
          className="mx-8 bg-clip-border"
        />
      </div>
    </div>
  );
};

export default ContactMe;
