import React, { useState } from "react";

const SectionA = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [cardNo, setCardNo] = useState(1);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  window.addEventListener("resize", updateWidth);

  const handlePrev = () => {
    if (cardNo !== 1) {
      setCardNo(cardNo - 1);
    }
  };
  const handleNext = () => {
    if (cardNo !== 3) {
      setCardNo(cardNo + 1);
    }
  };

  if (width < 768) {
    return (
      <div className="pt-20 p-5 md:py-20">
        <h2 className="text-3xl text-center font-semibold mb-8">
          ¿Qué aprenderás?
        </h2>

        <div className="flex md:items-center md:justify-between md:space-x-8 md:px-20 w-full mb-10">
          <div
            className={`${
              cardNo === 1 ? "" : "hidden"
            } p-4 mx-auto rounded-lg border border-[#CCCCD6] w-60 shadow-lg md:shadow-none pb-14 md:w-96`}
          >
            <img
              src="/images/laptop.png"
              alt="Laptop"
              className="mb-2 w-10 md:w-fit"
            />
            <p className="text-sm font-normal md:text-base">
              Las modalidades de trabajo que en la actualidad están habilitadas
              e identificar las ventajas y desventajas de cada una de estas.
            </p>
          </div>

          <div
            className={`${
              cardNo === 2 ? "" : "hidden"
            } p-4 mx-auto rounded-lg border border-[#CCCCD6] w-60 shadow-lg md:shadow-none pb-14 md:w-96`}
          >
            <img
              src="/images/certificate.png"
              alt="certificate"
              className="mb-2 w-10 md:w-fit"
            />
            <p className="text-sm font-normal md:text-base">
              Las modalidades de trabajo que en la actualidad están habilitadas
              e identificar las ventajas y desventajas de cada una de estas.
            </p>
          </div>

          <div
            className={`${
              cardNo === 3 ? "" : "hidden"
            } p-4 mx-auto rounded-lg border border-[#CCCCD6] w-60 shadow-lg md:shadow-none pb-14 md:w-96`}
          >
            <img
              src="/images/teaching.png"
              alt="teaching"
              className="mb-2 w-10 md:w-fit"
            />
            <p className="text-sm font-normal md:text-base">
              Las modalidades de trabajo que en la actualidad están habilitadas
              e identificar las ventajas y desventajas de cada una de estas.
            </p>
          </div>
        </div>

        <div className="px-10 mx-auto flex items-center justify-between">
          <button className="" onClick={handlePrev}>
            {cardNo === 1 ? (
              <img src="/images/gray-arrow.png" alt="prev" />
            ) : (
              <img
                src="/images/blue-arrow.png"
                alt="prev"
                className="rotate-180"
              />
            )}
          </button>
          <div className="space-x-2 flex">
            <div
              className={`w-6 h-2 rounded-lg cursor-pointer ${
                cardNo === 1 ? "bg-primary" : "bg-terciary"
              }`}
              onClick={() => setCardNo(1)}
            ></div>
            <div
              className={`w-6 h-2 rounded-lg cursor-pointer ${
                cardNo === 2 ? "bg-primary" : "bg-terciary"
              }`}
              onClick={() => setCardNo(2)}
            ></div>
            <div
              className={`w-6 h-2 rounded-lg cursor-pointer ${
                cardNo === 3 ? "bg-primary" : "bg-terciary"
              }`}
              onClick={() => setCardNo(3)}
            ></div>
          </div>
          <button onClick={handleNext}>
            {cardNo === 3 ? (
              <img
                src="/images/gray-arrow.png"
                alt="prev"
                className="rotate-180"
              />
            ) : (
              <img src="/images/blue-arrow.png" alt="prev" />
            )}
          </button>
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
        <div className="p-4 rounded-lg border border-[#CCCCD6] w-60 shadow-lg md:shadow-none pb-14 md:w-96">
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

        <div className="p-4 rounded-lg border border-[#CCCCD6] w-60 shadow-lg md:shadow-none pb-14 md:w-96">
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

        <div className="p-4 rounded-lg border border-[#CCCCD6] w-60 shadow-lg md:shadow-none pb-14 md:w-96">
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
