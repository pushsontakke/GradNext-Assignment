import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // Navigation styles
import 'swiper/css/pagination'; // Pagination styles
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SwiperComponent = ({data}) => {
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
                // onSlideChange={() => console.log('slide change')}
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
                {data.map((item) => (
                    <SwiperSlide><img src={item.image} alt="" className="object-contain"/></SwiperSlide>
                ))}
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