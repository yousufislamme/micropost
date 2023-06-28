import React, { useState } from 'react'
import Navbar from './Navbar'
import Head from 'next/head'
import Typewriter from 'typewriter-effect';
 
 
const Hero = () => { 
 
  return (   
    <>
      <Head>
        <title>Home</title>
      </Head>
    <Navbar/> 

      {/* Hero grid container */}
  <div className="grid gap-5">
        


        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 w-[95%] mx-auto rounded-md h-[500px]'>
          {/* First item */}
          <div className="col-span-1 gap-5 lg:col-span-2 h-[500px] bg-sky-400 rounded-md">
                  <h1 className='text-3xl'>
        
   <Typewriter
    options={{
      strings: [`Hello I'm <span class="font-bold text-purple-500">Yousuf</span>`, `I'm a <span class="font-bold">Web</span> <span class="font-bold text-green-500">Application Developer</span>`],
      autoStart: true,
      loop: true,
    }}
        />
      </h1>
        </div>
          {/* Secant item */}
          
          <div className=" h-[500px] bg-orange-400 rounded-md">
          <h2>Hello</h2>
          </div>        
      </div>


      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 w-[95%] mx-auto rounded-md h-[500px]'>
        <div className="col-span-1 lg:col-span-2 h-[500px] bg-sky-400 rounded-md"></div>
        <div className=" h-[500px] bg-orange-400 rounded-md"></div>        
      </div>


      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 w-[95%] mx-auto rounded-md h-[500px]'>
        <div className="col-span-1 lg:col-span-2 h-[500px] bg-sky-400 rounded-md"></div>
        <div className=" h-[500px] bg-orange-400 rounded-md"></div>        
      </div>

  </div>


    
      </>
    
  
 )}

export default Hero;