
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default () => {
    return (
        <>
            <div className='w-full flex mt-20 mb-20 fo'>
                <Swiper
                    // install Swiper modules
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 1500 }}
                    //   navigation
                    //   pagination={{ clickable: true }}
                    //   scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >

                    <SwiperSlide><div className='cursor-pointer '>
                        <p className='text-center md:text-xl text-lg text-[#a5a3a3]'>HELLO! I'M</p>
                        <h1 className='text-center md:text-5xl text-3xl font-bold mt-4'>NASIM PIRGHOLLO</h1>
                    </div></SwiperSlide>
                    <SwiperSlide><div className='cursor-pointer'>
                        <p className='text-center md:text-xl text-lg text-[#a5a3a3]'>I'M FROM IRAN</p>
                        <h1 className='text-center md:text-5xl text-3xl font-bold mt-4'>A WEB DESIGNER</h1>
                    </div></SwiperSlide>


                </Swiper>
            </div>

        </>
    )
}