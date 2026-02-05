'use client';

import React from 'react';
import Link from 'next/link';
import { Playfair_Display, Inter } from 'next/font/google';
import CheckoutFlow from './CheckoutFlow';

const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function CollectivePathOfHumanity() {
    return (
        <main className={`min-h-screen bg-[#FAFBFC] pt-24 ${inter.className}`}>

            {/* Hero Section */}
            <section className="relative px-6 py-16 md:py-24 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#E6FFFA]/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-[#EBF8FF]/40 to-transparent pointer-events-none" />

                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#E6FFFA] text-[#2C7A7B] font-medium text-sm mb-6 border border-[#2C7A7B]/20">
                        Featured Resource
                    </span>
                    <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A4D6F] mb-6 leading-tight ${playfair.className}`}>
                        The Collective Path of Humanity
                    </h1>
                    <h3 className={`text-lg md:text-3xl lg:text-3xl font-bold text-[#1A4D6F] mb-6 ${playfair.className}`}>
                        Solving the Unsolved, Together
                    </h3>


                    <p className="text-xl md:text-xl text-[#2D3748]/80 max-w-xl mx-auto leading-relaxed">
                        Explore how collective intelligence, co-creation, and aligned values can help address complex global challenges and shape a more resilient and meaningful future.
                    </p>
                </div>
            </section>

            {/* Content Container */}
            <div className="max-w-3xl mx-auto px-6 pb-24">

                {/* Value / Use Case Section */}
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
                    <h2 className={`text-2xl font-bold text-[#1A4D6F] mb-6 ${playfair.className}`}>
                        What You Will Gain
                    </h2>
                    <ul className="space-y-4">
                        {[
                            "A new way to understand global crises as systemic, connected challenges, not isolated problems",

                            "A practical framework built on five pillars to rethink progress, society, and human development",

                            "Clarity on how human wisdom and ethics must evolve alongside AI and technology",

                            "Insight into rebuilding community, culture, and shared meaning in times of uncertainty",

                            "Inspiration to move from passive concern to active, collective participation in shaping the future"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E6FFFA] flex items-center justify-center text-[#2C7A7B] mt-0.5">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="text-[#2D3748]/80 leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Order Section */}
                <div className="text-center relative">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-200 -z-10" />
                    <span className="bg-[#FAFBFC] px-4 text-gray-400 text-sm font-medium">Available Now</span>
                </div>

                <div className="mt-12 text-center bg-gradient-to-br from-[#1A4D6F] to-[#2C5F85] rounded-2xl p-8 md:p-12 text-white shadow-lg relative overflow-hidden group">
                    {/* Glossy Effect */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${playfair.className}`}>
                        Start Your Journey
                    </h3>
                    <p className="text-white/80 mb-8 max-w-lg mx-auto">
                        Get your copy today and join the movement towards a more prosperous future.
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <CheckoutFlow />
                        <span className="text-xs text-white/60">
                            *Secure instant delivery via email.
                        </span>
                    </div>
                </div>

                {/* Contextual Alignment */}
                <div className="mt-16 pt-8 border-t border-gray-200 text-center">
                    <p className={`text-lg italic text-[#2D3748]/60 max-w-2xl mx-auto ${playfair.className}`}>
                        "This resource is a cornerstone of the SaSarjan initiative, designed to empower every individual with the knowledge to create and sustain wealth for the greater good."
                    </p>
                </div>

            </div>
        </main>
    );
}
