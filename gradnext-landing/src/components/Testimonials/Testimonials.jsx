import React from 'react';
import { Monitor, User, Users } from 'lucide-react';
import p1 from "/p1.png"
import p2 from "/p2.png"
import p3 from "/p3.png"
import p4 from "/p4.png"
import p5 from "/p5.png"
import p6 from "/p6.png"
import p7 from "/p7.png"
import p8 from "/p8.png"
import p9 from "/p9.png"
import p10 from "/p10.png"
import SwiperComponent from "../Swiper/Swiper.jsx";

const Testimonials = () => {
    const stats = [
        {
            number: "1K+",
            description: "community of aspiring consultants"
        },
        {
            number: "67%",
            description: "of candidates who have completed the program have received an offer"
        },
        {
            number: "13+",
            description: "countries represented among candidates"
        }
    ];

    const profiles = [
        {
            image: p1,
        },
        {
            image: p2,
        },
        {
            image: p3,
        },
        {
            image: p4,
        },
        {
            image: p5,
        },
        {
            image: p6,
        },
        {
            image: p7,
        },
        {
            image: p8,
        },
        {
            image: p9,
        },
        {
            image: p10,
        }
    ];

    const features = [
        {
            icon: Monitor,
            title: "Live Interactive Sessions"
        },
        {
            icon: User,
            title: "1:1 Mentorship with MBB Consultant"
        },
        {
            icon: Users,
            title: "Network with Cohort Members"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Stats Section */}
            <div className="px-4 py-8 md:py-12 lg:py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-700 mb-4">
                                    {stat.number}
                                </div>
                                <p className="text-gray-600 text-sm md:text-base max-w-xs mx-auto leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Hero Section */}
            <div className="px-4 py-8 md:py-12">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700 mb-6">
                        Consulting Cohort 101
                    </div>
                    <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-4xl mx-auto">
                        Join an exclusive group of driven individuals to sharpen your consulting fundamentals
                    </p>

                    {/* Profile Carousel */}
                    <SwiperComponent data={profiles} />

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <div className="mb-4">
                                    {/*<feature.icon className="w-8 h-8 md:w-10 md:h-10 text-slate-600" />*/}
                                </div>
                                <div className="text-lg md:text-xl font-semibold text-slate-700">
                                    {feature.title}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <a href="https://www.gradnext.co/consultingcohort101" className="border border-slate-800 hover:bg-slate-800 hover:text-white font-semibold px-8 py-3 md:px-10 md:py-4 rounded-lg transition-colors duration-200 text-lg">
                        Enrol for Sep Cohort
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;