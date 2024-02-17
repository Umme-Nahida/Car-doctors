import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../../../../public/image/team/1.jpg'
import img2 from '../../../../public/image/team/2.jpg'
import img3 from '../../../../public/image/team/3.jpg'

const Team = () => {
  return (
    <div className="py-10">
      <div className="space-y-3 lg:text-center md:text-left">
        <h1 className="text-xl font-bold text-red-700">Team</h1>
        <h1 className="text-5xl font-bold">Meet Our Team</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div>
      <Swiper
         slidesPerView={3}
         centeredSlides={true}
         spaceBetween={30}
        navigation={true} modules={[Navigation]} 
        className="mySwiper p-10 m-10"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
            <h2>Car Engine Plug</h2>
            <p>Engine Expert</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
            <h2>Car Engine Plug</h2>
            <p>Engine Expert</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
            <h2>Car Engine Plug</h2>
            <p>Engine Expert</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img1} alt="" />
            <h2>Car Engine Plug</h2>
            <p>Engine Expert</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
            <h2>Car Engine Plug</h2>
            <p>Engine Expert</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
            <h2>Car Engine Plug</h2>
            <p>Engine Expert</p>
        </SwiperSlide>
        
      </Swiper>
      </div>
    </div>
  );
};

export default Team;
