// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

export default function Hero() {

  const [heroSection,setHeroSection] = useState([])

    useEffect(() => {
        fetchData()
      }, []);
    
    
      async function fetchData(){
    
        await fetch('/images/Hero/hero.json')
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            setHeroSection(data);
          })
          .catch(err => console.error('Fetch error:', err));
    
      }
    

  return (
    <>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {heroSection.map((element,i)=>(
          <SwiperSlide className='max-h-[75vh] object-contain' key={i}>
            <div className='relative'>
              <img src={element.img} alt={element.title} className=''/>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <h1 className='pb-5 text-xl sm:text-3xl text-start font-bold text-blue-200'>{element.title}</h1>
              <p className='hidden md:block text-lg text-start text-gray-200'>{element.desc}</p>
              <button className='mt-5 py-2 px-5 block mr-auto rounded-full bg-lime-200 hover:bg-lime-500'>Buy Now</button>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
