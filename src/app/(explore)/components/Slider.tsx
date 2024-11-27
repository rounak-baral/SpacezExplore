import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SmallImage from "../../../../assets/BannerImg.svg"; // This is the image for the mobile view.

function Slider() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {[...Array(1)].map((_, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full pattern mobile:h-[250px] h-[550px] rounded-md overflow-hidden mb-16">
            <div className="mobile:hidden relative w-full h-[550px] pattern bg-[#7F7F69] rounded-md overflow-hidden mb-16 flex items-center justify-between px-10">
              {/* Left section with text */}
              <div className="flex-1 px-28 mobile:px-3">
                <h3 className="text-lg font-semibold text-white uppercase mb-2">
                  Spacez Collection
                </h3>
                <h1 className="text-6xl font-bold text-white mb-4">Explore</h1>
                <p className="text-white py-6 text-lg">
                  Discover the best of Spacez with our curated blogs! From top
                  food spots and hidden gems to must-visit places around your
                  stay, get inspired and make your journey unforgettable.
                  Explore Spacez recommendations for unique experiences and
                  more!
                </p>
              </div>
              {/* Right section for the small image */}
              <div className="flex-1 flex justify-end">
                <Image
                  src={SmallImage}
                  alt="Illustration"
                  className="w-[700px] h-[500px] object-contain"
                />
              </div>
            </div>

            {/* Mobile view */}
            <div className="hidden mobile:flex  items-center justify-center px-4 h-full">
              <Image
                src={SmallImage}
                alt="Illustration"
                className="flex flex-1 h-[200px] object-cover mb-4"
              />
              <div className="flex text-center flex-1 flex-col">
                <h3 className="text-sm font-semibold text-white uppercase mb-1">
                  Spacez Collection
                </h3>
                <h1 className="text-3xl font-bold text-white mb-2">Explore</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
