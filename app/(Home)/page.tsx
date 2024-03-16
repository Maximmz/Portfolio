import React from 'react'
import Navbar from "./components/Navbar";
import HeroComponent from "./components/ui/HeroComponent";
import Services from "./components/Services";
import Skills from './components/Skills';
import FloatingNav from './components/FloatingNav';
import ProjectsDisplay from './components/ProjectsDisplay';
import ContactMe from './components/ContactMe';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-800">
      <div className="mx-auto overflow-hidden">
      <Navbar />
      <HeroComponent />
      <Skills />
      <ProjectsDisplay />
      <Services />
      <ContactMe />
     
      <FloatingNav />
      
      </div>
    </div>
  
  )
}
