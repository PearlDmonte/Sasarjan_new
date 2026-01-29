'use client';

import React from 'react';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

type Status = 'Live' | 'In Development' | 'Coming Soon' | 'Planning';

interface Initiative {
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    status: Status;
    link?: string;
}

const initiatives: Initiative[] = [
    // Row 1
    {
        title: 'SaSarjan.com',
        subtitle: 'Parent Group - Co-Creating Together',
        description: 'Our parent company uniting stakeholders for collective prosperity',
        icon: '🤝',
        status: 'Live',
        link: '#'
    },
    {
        title: '10xGrowth.com',
        subtitle: 'Business Acceleration',
        description: 'Exponential growth strategies for businesses',
        icon: '📈',
        status: 'Coming Soon',
    },
    {
        title: 'BookBazaar.com',
        subtitle: 'Book Marketing Platform',
        description: 'Discover, promote, and connect authors with readers through community-driven book marketing',
        icon: '📚',
        status: 'In Development',
        link: '#'
    },
    // Row 2
    {
        title: 'TalentExcel.com',
        subtitle: 'Lifelong Learning Platform',
        description: 'Learning opportunities in business, technology & media with earning opportunities',
        icon: '🎓',
        status: 'In Development',
        link: '#'
    },
    {
        title: 'SevaPremi.com',
        subtitle: 'Community Service Platform',
        description: 'Local area improvement through volunteers, solution designers & donors',
        icon: '🙏',
        status: 'In Development',
        link: '#'
    },
    {
        title: 'Happy247.world',
        subtitle: 'Wellness & Happiness',
        description: 'Your journey to continuous happiness and wellbeing',
        icon: '😊',
        status: 'Coming Soon',
    },
    // Row 3
    {
        title: 'Premi.world',
        subtitle: 'Global Connections',
        description: 'Connect with like-minded individuals worldwide',
        icon: '🌍',
        status: 'Coming Soon',
    },
    {
        title: 'NanhaSitara.com',
        subtitle: 'Youth Development',
        description: 'Nurturing young talents and future stars',
        icon: '⭐',
        status: 'Planning',
    },
    {
        title: 'Incubator.in',
        subtitle: 'Startup Ecosystem',
        description: 'Incubation, mentorship, and growth for startups',
        icon: '🚀',
        status: 'Planning',
    }
];

const getStatusColor = (status: Status) => {
    switch (status) {
        case 'Live': return 'bg-[#E6FFFA] text-[#1A4D6F] border border-[#1A4D6F]/20';
        case 'In Development': return 'bg-[#EBF8FF] text-[#2B6CB0] border border-[#2B6CB0]/20';
        case 'Coming Soon': return 'bg-[#FFFFF0] text-[#B7791F] border border-[#B7791F]/20';
        case 'Planning': return 'bg-[#F7FAFC] text-[#4A5568] border border-[#4A5568]/20';
        default: return 'bg-gray-100 text-gray-800';
    }
};

const Initiatives = () => {
    return (
        <section id="initiatives" className={`py-24 bg-[#FAFBFC] relative ${inter.className}`}>
            {/* Subtle Gradient Overlay - Matches Navbar/Hero feel */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className={`text-3xl md:text-4xl font-bold text-[#1A4D6F] mb-4 ${playfair.className}`}>
                        Growing Multiple Ecosystems
                    </h2>
                    <p className="text-lg text-[#2D3748]/70 leading-relaxed">
                        Each initiative strengthens the others — creating value that flows across the entire network.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {initiatives.map((item, index) => (
                        <div
                            key={item.title}
                            className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full border border-gray-100/80"
                        >
                            {/* Consistent Brand Color Top Border */}
                            <div className="h-1.5 w-full bg-[#1A4D6F]" />

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="text-4xl mb-6">{item.icon}</div>

                                <h3 className={`text-xl font-bold text-[#1A4D6F] mb-1 ${playfair.className}`}>
                                    {item.title}
                                </h3>
                                <p className="text-sm font-medium text-[#2C5F85] mb-4">
                                    {item.subtitle}
                                </p>
                                <p className="text-[#2D3748]/70 text-sm leading-relaxed mb-8 flex-1">
                                    {item.description}
                                </p>

                                <div className="flex items-center justify-between mt-auto">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${getStatusColor(item.status)}`}>
                                        {item.status}
                                    </span>

                                    {(item.status === 'Live' || item.status === 'In Development') && (
                                        <a href={item.link || '#'} className="flex items-center text-[#1A4D6F] hover:text-[#0f2d42] font-medium text-sm transition-colors group/link">
                                            Visit
                                            <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Initiatives;
