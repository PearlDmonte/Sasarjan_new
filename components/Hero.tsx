'use client';

import React from 'react';
import Image from 'next/image';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const Hero = () => {
  return (
    <div className={`relative w-full h-screen overflow-hidden ${inter.className}`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Peaceful nature background representing co-creation"
          fill
          priority
          className="object-cover object-bottom"
          quality={100}
        />
        {/* Gradient Overlay for Smooth Transition (Reduced for Vibrancy) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFBFC] via-transparent to-transparent opacity-90" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">

        {/* Animated Headline */}
        <div className="max-w-4xl opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards] translate-y-4">
          <h1 className={`${playfair.className} text-3xl md:text-5xl font-bold leading-tight mb-3 tracking-tight text-[#113046] drop-shadow-sm`}>
            When We Build Together,<br />
            Everyone Grows Stronger
          </h1>
          <p className={`${playfair.className} text-xl md:text-3xl text-[#2C5F85] italic mb-8 font-medium`}>
            सह-सृजन | Co-Creation for Collective Prosperity
          </p>
        </div>

        {/* Subheading */}
        <p className="max-w-2xl text-lg md:text-xl text-[#1A202C] font-normal mb-10 leading-relaxed animate-[fadeIn_1s_ease-out_0.8s_forwards] opacity-0 translate-y-4">
          An ecosystem where entrepreneurs, institutions, and changemakers connect, contribute, and create shared value.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 items-center animate-[fadeIn_1s_ease-out_1.1s_forwards] opacity-0 translate-y-4">
          <button className="px-8 py-4 bg-[#1A4D6F] text-white rounded-full font-semibold text-lg shadow-lg shadow-[#1A4D6F]/30 hover:shadow-[#1A4D6F]/50 hover:bg-[#153e5a] hover:-translate-y-1 transition-all duration-300">
            Join the Ecosystem
          </button>

          <a href="#" className="text-[#1A4D6F] font-bold text-lg hover:text-[#0f2d42] transition-colors relative group">
            Explore How It Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1A4D6F] transition-all group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
