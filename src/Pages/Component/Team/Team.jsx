import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../../../../public/image/team/1.jpg";
import img2 from "../../../../public/image/team/2.jpg";
import img3 from "../../../../public/image/team/3.jpg";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const Team = () => {
  return (
    <div className="p-10">
      <div className="space-y-3 lg:text-center md:text-center text-center">
        <h1 className="text-xl font-bold text-red-700">Team</h1>
        <h1 className="text-5xl font-bold">Meet Our Team</h1>
        <p>
          the majority have suffered alteration in some form, by injected hu
          mour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="py-10">
        <Swiper
          slidesPerView={3}
          onAutoplayTimeLeft={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="max-w-[350px] space-y-4 rounded-lg  p-6 shadow-lg md:w-[350px] text-center border-2 bg-white">
              <img
                alt="Product Image"
                className="w-[350px] h-[275px] object-cover  rounded-lg "
                src={img1}
              />
              <div className="grid gap-2">
                <h1 className="text-lg font-semibold ">Car Engine Plug</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Engine Expert
                </p>
              </div>
              <div className="flex gap-4 justify-center">
                <FaTwitter className="bg-[#55ACEE] text-white rounded text-2xl transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] "></FaTwitter>
                <FaLinkedinIn className="bg-[#0A66C2] text-white rounded text-2xl transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] "></FaLinkedinIn>
                <FaInstagram className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  text-white rounded text-2xl"></FaInstagram>
                <div className="transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] rounded">
                <FaFacebookF className="bg-blue-600 text-white rounded text-2xl"/>
              </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="max-w-[350px] space-y-4 rounded-lg  p-6 shadow-lg md:w-[350px] text-center border-2 bg-white">
              <img
                alt="Product Image"
                className="w-[350px] h-[275px] object-cover  rounded-lg "
                src={img1}
              />
              <div className="grid gap-2">
                <h1 className="text-lg font-semibold ">Car Engine Plug</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Engine Expert
                </p>
              </div>
              <div className="flex gap-4 justify-center">
                <FaTwitter className="bg-[#55ACEE] text-white rounded text-2xl transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] "></FaTwitter>
                <FaLinkedinIn className="bg-[#0A66C2] text-white rounded text-2xl transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] "></FaLinkedinIn>
                <FaInstagram className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  text-white rounded text-2xl"></FaInstagram>
                <div className="transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] rounded">
                <FaFacebookF className="bg-blue-600 text-white rounded text-2xl"/>
              </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="max-w-[350px] space-y-4 rounded-lg  p-6 shadow-lg md:w-[350px] text-center border-2 bg-white">
              <img
                alt="Product Image"
                className="w-[350px] h-[275px] object-cover  rounded-lg "
                src={img2}
              />
              <div className="grid gap-2">
                <h1 className="text-lg font-semibold ">Car Engine Plug</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Engine Expert
                </p>
              </div>
              <div className="flex gap-4 justify-center">
                <FaTwitter className="bg-[#55ACEE] text-white rounded text-2xl transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] "></FaTwitter>
                <FaLinkedinIn className="bg-[#0A66C2] text-white rounded text-2xl transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] "></FaLinkedinIn>
                <FaInstagram className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  text-white rounded text-2xl"></FaInstagram>
                <div className="transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] rounded">
                <FaFacebookF className="bg-blue-600 text-white rounded text-2xl"/>
              </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="max-w-[350px] space-y-4 rounded-lg  p-6 shadow-lg md:w-[350px] text-center border-2 bg-white">
              <img
                alt="Product Image"
                className="w-[350px] h-[275px] object-cover  rounded-lg "
                src={img3}
              />
              <div className="grid gap-2">
                <h1 className="text-lg font-semibold ">Car Engine Plug</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Engine Expert
                </p>
              </div>
              <div className="flex gap-4 justify-center">
                <FaTwitter className="bg-[#55ACEE] text-white rounded text-2xl transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] "></FaTwitter>
                <FaLinkedinIn className="bg-[#0A66C2] text-white rounded text-2xl transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] "></FaLinkedinIn>
                <FaInstagram className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  text-white rounded text-2xl"></FaInstagram>
                <div className="transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] rounded">
                <FaFacebookF className="bg-blue-600 text-white rounded text-2xl"/>
              </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="max-w-[350px] space-y-4 rounded-lg  p-6 shadow-lg md:w-[350px] text-center border-2 bg-white">
              <img
                alt="Product Image"
                className="w-[350px] h-[275px] object-cover  rounded-lg "
                src={img1}
              />
              <div className="grid gap-2">
                <h1 className="text-lg font-semibold ">Car Engine Plug</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Engine Expert
                </p>
              </div>
              <div className="flex gap-4 justify-center">
                <FaTwitter className="bg-[#55ACEE] text-white rounded text-2xl transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] "></FaTwitter>
                <FaLinkedinIn className="bg-[#0A66C2] text-white rounded text-2xl transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] "></FaLinkedinIn>
                <FaInstagram className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  text-white rounded text-2xl"></FaInstagram>
                <div className="transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] rounded">
                <FaFacebookF className="bg-blue-600 text-white rounded text-2xl"/>
              </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
