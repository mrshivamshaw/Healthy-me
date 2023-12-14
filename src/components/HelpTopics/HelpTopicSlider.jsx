import products from './HelpTopicJson'
import Products from './Products'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default () => {
  return (
    <Swiper 
      className=''
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <div  className='flex justify-around relative'>
        {products.map((product) => (
          <SwiperSlide className='rounded-full'>
          <Products 
            key={product.id}
            image = {product.image}
            name={product.name}
            description={product.description}
          />
          </SwiperSlide>
        ))}
        </div>
    </Swiper>
  );
};