import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import image1 from '../../assets/image/1.jpg'
import image2 from '../../assets/image/2.jpg'
import image3 from '../../assets/image/3.jpg'
import image4 from '../../assets/image/4.jpg'
import { FaCirclePlay } from 'react-icons/fa6';
import { Link } from 'react-router';
import useMovie from '../../Hooks/useMovie';

const HeroSection = () => {
    const { data: movies = [], isLoading } = useMovie();
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >

            {
                movies.map((item, index) => (
                    <SwiperSlide key={index} className='relative z-0'>
                        <img className='w-full h-[500px] xl:h-[700px] object-cover' src={item?.show?.image?.original} alt="" />
                        <div className='absolute text-left top-0 left-0 w-full h-full flex flex-col justify-center px-10 text-white'>
                            <h2 className='text-4xl font-bold mb-4'>{item?.show?.name}</h2>
                            <p className='mb-6'>Release Date: {item?.show?.ended}</p>
                            <div className='flex items-center justify-between gap-4'>
                                <button className='bg-red-500 px-6 py-2 font-semibold rounded'>Watch Now</button>

                                <Link to="https://youtu.be/u9Mv98Gr5pY?si=3r15L9z_Lm37Xx-C">
                                    <FaCirclePlay className='text-red-500 text-4xl cursor-pointer' />
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }


        </Swiper>
    );
};

export default HeroSection;