import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const SectionFive = () => {
    return (
        <div className='container mt-[100px] overflow-x-hidden'>

            <div className=' pb-12 text-2xl md:text-4xl'>
            Trusted by Leading Brands & Startups
            </div>
            <Swiper
                slidesPerView="auto"
                spaceBetween={60}
                // centeredSlides={true}
                grabCursor={true}
                // loop={true}
                className="mySwiper py-4 overflow-visible"
            >
                <SwiperSlide className=" w-auto">
                    <div className='border border-gray-400 rounded-xl shadow-lg p-4 flex flex-col items-center w-[250px]'>
                        <img src="homeimg/googleLogo.png" className='w-16' alt="" />

                        <div className='text-gray-600 space-y-2 text-center mt-4'>
                            <div className='text-black text-2xl font-semibold'>Google</div>
                            <div className=''>Chennai</div>
                            <div> <span className='text-red-400'> 12 </span> Jobs availiable</div>

                        </div>

                        <div className='m-auto px-4 py-2 rounded-full mt-9 border cursor-pointer border-blue-600 text-blue-600 bg-blue-100'>
                            View Jobs
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className=" w-auto">
                    <div className='border border-gray-400 rounded-xl shadow-lg p-4 flex flex-col items-center w-[250px]'>
                        <img src="homeimg/googleLogo.png" className='w-16' alt="" />

                        <div className='text-gray-600 space-y-2 text-center mt-4'>
                            <div className='text-black text-2xl font-semibold'>Google</div>
                            <div className=''>Chennai</div>
                            <div> <span className='text-red-400'> 12 </span> Jobs availiable</div>

                        </div>

                        <div className='m-auto px-4 py-2 rounded-full mt-9 border cursor-pointer border-blue-600 text-blue-600 bg-blue-100'>
                            View Jobs
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className=" w-auto">
                    <div className='border border-gray-400 rounded-xl shadow-lg p-4 flex flex-col items-center w-[250px]'>
                        <img src="homeimg/googleLogo.png" className='w-16' alt="" />

                        <div className='text-gray-600 space-y-2 text-center mt-4'>
                            <div className='text-black text-2xl font-semibold'>Google</div>
                            <div className=''>Chennai</div>
                            <div> <span className='text-red-400'> 12 </span> Jobs availiable</div>

                        </div>

                        <div className='m-auto px-4 py-2 rounded-full mt-9 border cursor-pointer border-blue-600 text-blue-600 bg-blue-100'>
                            View Jobs
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className=" w-auto">
                    <div className='border border-gray-400 rounded-xl shadow-lg p-4 flex flex-col items-center w-[250px]'>
                        <img src="homeimg/googleLogo.png" className='w-16' alt="" />

                        <div className='text-gray-600 space-y-2 text-center mt-4'>
                            <div className='text-black text-2xl font-semibold'>Google</div>
                            <div className=''>Chennai</div>
                            <div> <span className='text-red-400'> 12 </span> Jobs availiable</div>

                        </div>

                        <div className='m-auto px-4 py-2 rounded-full mt-9 border cursor-pointer border-blue-600 text-blue-600 bg-blue-100'>
                            View Jobs
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className=" w-auto">
                    <div className='border border-gray-400 rounded-xl shadow-lg p-4 flex flex-col items-center w-[250px]'>
                        <img src="homeimg/googleLogo.png" className='w-16' alt="" />

                        <div className='text-gray-600 space-y-2 text-center mt-4'>
                            <div className='text-black text-2xl font-semibold'>Google</div>
                            <div className=''>Chennai</div>
                            <div> <span className='text-red-400'> 12 </span> Jobs availiable</div>

                        </div>

                        <div className='m-auto px-4 py-2 rounded-full mt-9 border cursor-pointer border-blue-600 text-blue-600 bg-blue-100'>
                            View Jobs
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className=" w-auto">
                    <div className='border border-gray-400 rounded-xl shadow-lg p-4 flex flex-col items-center w-[250px]'>
                        <img src="homeimg/googleLogo.png" className='w-16' alt="" />

                        <div className='text-gray-600 space-y-2 text-center mt-4'>
                            <div className='text-black text-2xl font-semibold'>Google</div>
                            <div className=''>Chennai</div>
                            <div> <span className='text-red-400'> 12 </span> Jobs availiable</div>

                        </div>

                        <div className='m-auto px-4 py-2 rounded-full mt-9 border cursor-pointer border-blue-600 text-blue-600 bg-blue-100'>
                            View Jobs
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className=" w-auto">
                    <div className='border border-gray-400 rounded-xl shadow-lg p-4 flex flex-col items-center w-[250px]'>
                        <img src="homeimg/googleLogo.png" className='w-16' alt="" />

                        <div className='text-gray-600 space-y-2 text-center mt-4'>
                            <div className='text-black text-2xl font-semibold'>Google</div>
                            <div className=''>Chennai</div>
                            <div> <span className='text-red-400'> 12 </span> Jobs availiable</div>

                        </div>

                        <div className='m-auto px-4 py-2 rounded-full mt-9 border cursor-pointer border-blue-600 text-blue-600 bg-blue-100'>
                            View Jobs
                        </div>
                    </div>
                </SwiperSlide>




            </Swiper>


            <div className='flex justify-end items-center gap-2  mt-9 underline'>
               <span> View More  </span>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>


            </div>
        </div>
    )
}

export default SectionFive