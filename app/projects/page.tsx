import React from 'react';
import Navbar from "../(Home)/components/Navbar";
import Project from "./components/Project";
import FloatingNav from '../(Home)/components/FloatingNav';
import ScrollTop from './components/ScrollTop';
import Back from '@/components/Back';

export default function Projects() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-800">
      <div className="mx-auto overflow-y-clip">
        <Navbar/>
        <Project />
        <ScrollTop />
        <FloatingNav />
        </div>
        </div>
  )
}
