import { useState } from "react";
import { BtnSm } from "./Button";
import React from "react";

const SectionB = () => {
  const [cardNo, setCardNo] = useState(1);

  const handlePrev = () => {
    if (cardNo !== 1) {
      setCardNo(cardNo - 1);
    }
  };
  const handleNext = () => {
    if (cardNo !== 2) {
      setCardNo(cardNo + 1);
    }
  };

  return (
    <div className="p-5 md:pb-20 pt-10 md:pt-0">
      <h2 className="text-3xl text-center font-semibold mb-8">
        ¿Qué aprenderás?
      </h2>

      <div className="flex mb-10 md:items-center md:space-x-8 md:px-20 w-full flex-col md:flex-row space-y-4 md:space-y-0">
        <div
          className={`${
            cardNo === 1 ? "" : "hidden"
          } flex flex-col md:flex-row-reverse items-center space-x-5 w-full md:space-x-0 space-y-8 md:space-y-0`}
        >
          <div className="md:w-1/2">
            <img
              src="/images/section-b-1.png"
              alt="section-b-1"
              className="w-full"
            />
          </div>

          <div className="space-y-8 md:w-1/2">
            <h2 className="text-2xl font-medium">
              Ventajas y desventajas de las nuevas modalidades de trabajo
            </h2>
            <p className="text-sm md:text-base">
              Los representantes de las organizaciones y los encuestados
              coinciden que la ventaja principal de la modalidad presencial es
              que facilita el nivel de comunicación. Mientras que la manera
              híbrida es esencial para que se genere un buen clima
              organizacional. Por último, la modalidad remota les permite contar
              con talento internacional en sus equipos de trabajo.
            </p>
            <div className="space-y-4 flex flex-col items-center justify-center md:items-start md:justify-start md:flex-row md:space-y-0 md:space-x-4">
              <BtnSm
                textColor="white"
                bgColor="primary"
                text={"Descargar Gratis"}
                otherClasses="w-48"
              />
              <h4 className="font-medium w-32 text-center">
                +50 personas ya han descargado
              </h4>
            </div>
          </div>
        </div>

        <div
          className={`${
            cardNo === 2 ? "" : "hidden"
          } flex flex-col md:flex-row-reverse items-center justify-center space-x-5 w-full space-y-8 md:space-y-0`}
        >
          <div className="md:w-1/2">
            <img
              src="/images/section-b-2.png"
              alt="section-b-2"
              className="w-full"
            />
          </div>

          <div className="space-y-8 md:w-1/2">
            <h2 className="text-2xl font-medium">Habilidades del futuro</h2>
            <p className="text-sm md:text-base">
              En un mercado laboral más automatizado, digital y dinámico, todos
              los colaboradores se beneficiarán de tener un conjunto de
              habilidades fundamentales que los ayuden a cumplir con los
              siguientes tres criterios, sin importar el sector en el que
              trabajen o su ocupación:
            </p>
            <div className="space-y-4 flex flex-col items-center justify-center md:items-start md:justify-start md:flex-row md:space-y-0 md:space-x-4">
              <BtnSm
                textColor="white"
                bgColor="primary"
                text={"Descargar Gratis"}
                otherClasses="w-48"
              />
              <h4 className="font-medium w-32 text-center text-sm">
                +50 personas ya han descargado
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="px-10 mx-auto flex items-center justify-between w-full">
        <button
          onClick={handlePrev}
          className="md:flex md:items-center md:space-x-3"
        >
          {cardNo === 2 ? (
            <img
              src="/images/blue-arrow.png"
              alt="prev"
              className="rotate-180"
            />
          ) : (
            <img
              src="/images/gray-arrow.png"
              alt="prev"
              // className="rotate-180"
            />
          )}
          <p className="hidden md:block text-primary font-medium">Anterior</p>
        </button>
        <div className="space-x-2 flex">
          <div
            className={`w-6 md:w-12 h-2 rounded-lg cursor-pointer ${
              cardNo === 1 ? "bg-primary" : "bg-terciary"
            }`}
            onClick={() => setCardNo(1)}
          ></div>
          <div
            className={`w-6 md:w-12 h-2 rounded-lg cursor-pointer ${
              cardNo === 2 ? "bg-primary" : "bg-terciary"
            }`}
            onClick={() => setCardNo(2)}
          ></div>
        </div>
        <button
          onClick={handleNext}
          className="md:flex md:items-center md:space-x-3"
        >
          <p className="hidden md:block text-primary font-medium">Siguiente</p>
          {cardNo === 1 ? (
            <img
              src="/images/blue-arrow.png"
              alt="prev"
              // className="rotate-180"
            />
          ) : (
            <img
              src="/images/gray-arrow.png"
              alt="prev"
              className="rotate-180"
            />
          )}
        </button>
      </div>
    </div>
  );
};
export default SectionB;
