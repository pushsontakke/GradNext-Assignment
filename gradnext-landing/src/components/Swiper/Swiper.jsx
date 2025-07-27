import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import accentureImg from "/accenture.jpeg";
import alvarezImg from "/Alvarez.jpg";
import arthurImg from "/arthur.jpg";
import bainImg from "/bain.jpg";
import BCGImg from "/BCG.jpg";
import EYImg from "/EY.jpg";
import kearneyImg from "/kearney.jpg";
import mckinseyImg from "/Mckinsey.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // Navigation styles
import 'swiper/css/pagination'; // Pagination styles
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SwiperComponent = () => {
    const swiperRef = useRef(null);
    return (
        <div className="relative"> {/* Container for navigation buttons */}
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={5}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                // pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    // console.log(swiper);
                }}
                onSlideChange={() => console.log('slide change')}
                breakpoints={{
                    // Responsive breakpoints
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50
                    }
                }}
            >
                <SwiperSlide><img src={accentureImg} alt="Accenture" className="h-20 object-contain"/></SwiperSlide>
                <SwiperSlide><img src={alvarezImg} alt="Alvarez & Marsal" className="h-20 object-contain"/></SwiperSlide>
                <SwiperSlide><img src={arthurImg} alt="Arthur D. Little" className="h-20 object-contain"/></SwiperSlide>
                <SwiperSlide><img src={bainImg} alt="Bain & Company" className="h-20 object-contain"/></SwiperSlide>
                <SwiperSlide><img src={BCGImg} alt="Boston Consulting Group" className="h-20 object-contain"/></SwiperSlide>
                <SwiperSlide><img src={EYImg} alt="EY" className="h-20 object-contain"/></SwiperSlide>
                <SwiperSlide><img src={kearneyImg} alt="Kearney" className="h-20 object-contain"/></SwiperSlide>
                <SwiperSlide><img src={mckinseyImg} alt="McKinsey & Company" className="h-20 object-contain"/></SwiperSlide>
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
            >
                <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>
            <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
            >
                <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>
        </div>
    );
};

export default SwiperComponent;