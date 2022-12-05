import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const SectionA = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  window.addEventListener("resize", updateWidth);

  if (width < 1024) {
    return (
      <div className="pt-20 p-5 md:py-20">
        <h2 className="text-3xl text-center font-semibold mb-8">
          ¿Qué aprenderás?
        </h2>

        <div className="flex md:items-center md:justify-between md:space-x-8 md:px-20 w-full mb-10">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
              <div
                className={`p-4 mx-auto rounded-lg border border-[#CCCCD6] w-60 shadow-lg md:shadow-none pb-14 md:w-96`}
              >
                <img
                  src="/images/laptop.png"
                  alt="Laptop"
                  className="mb-2 w-10 md:w-fit"
                />
                <p className="text-sm font-normal md:text-base">
                  Las modalidades de trabajo que en la actualidad están
                  habilitadas e identificar las ventajas y desventajas de cada
                  una de estas.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`p-4 mx-auto rounded-lg border border-[#CCCCD6] w-60 shadow-lg md:shadow-none pb-14 md:w-96`}
              >
                <img
                  src="/images/laptop.png"
                  alt="Laptop"
                  className="mb-2 w-10 md:w-fit"
                />
                <p className="text-sm font-normal md:text-base">
                  Las modalidades de trabajo que en la actualidad están
                  habilitadas e identificar las ventajas y desventajas de cada
                  una de estas.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`p-4 mx-auto rounded-lg border border-[#CCCCD6] w-60 shadow-lg md:shadow-none pb-14 md:w-96`}
              >
                <img
                  src="/images/laptop.png"
                  alt="Laptop"
                  className="mb-2 w-10 md:w-fit"
                />
                <p className="text-sm font-normal md:text-base">
                  Las modalidades de trabajo que en la actualidad están
                  habilitadas e identificar las ventajas y desventajas de cada
                  una de estas.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 p-5 md:py-20">
      <h2 className="text-3xl text-center font-semibold mb-8">
        ¿Qué aprenderás?
      </h2>

      <div className="flex md:items-center md:justify-center md:space-x-8 md:px-20 w-full flex-col md:flex-row space-y-4 md:space-y-0">
        <div className="p-4 rounded-lg border border-[#CCCCD6] w-48 shadow-lg md:shadow-none pb-14 md:w-96">
          <img
            src="/images/laptop.png"
            alt="Laptop"
            className="mb-2 w-10 md:w-fit"
          />
          <p className="text-sm font-normal md:text-base">
            Las modalidades de trabajo que en la actualidad están habilitadas e
            identificar las ventajas y desventajas de cada una de estas.
          </p>
        </div>

        <div className="p-4 rounded-lg border border-[#CCCCD6] w-48 shadow-lg md:shadow-none pb-14 md:w-96">
          <img
            src="/images/certificate.png"
            alt="certificate"
            className="mb-2 w-10 md:w-fit"
          />
          <p className="text-sm font-normal md:text-base">
            Las modalidades de trabajo que en la actualidad están habilitadas e
            identificar las ventajas y desventajas de cada una de estas.
          </p>
        </div>

        <div className="p-4 rounded-lg border border-[#CCCCD6] w-48 shadow-lg md:shadow-none pb-14 md:w-96">
          <img
            src="/images/teaching.png"
            alt="teaching"
            className="mb-2 w-10 md:w-fit"
          />
          <p className="text-sm font-normal md:text-base">
            Las modalidades de trabajo que en la actualidad están habilitadas e
            identificar las ventajas y desventajas de cada una de estas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionA;
