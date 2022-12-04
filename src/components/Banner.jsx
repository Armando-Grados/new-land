import { BtnSm } from "./Button";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-primary p-5 text-secondary md:w-full flex flex-col space-y-4 pb-16 md:flex-row">
      <div className="w-full flex">
        <img src="/images/banner-image.png" alt="Banner" className="w-full" />
      </div>
      <div className="w-full flex justify-center flex-col">
        <p className="text-white font-semibold text-xl mb-2">Estudio</p>
        <h2 className="text-white font-bold text-3xl mb-4">
          Perfil del Colaborador Ideal Highlights
        </h2>
        <p className="text-white font-medium text-base md:text-lg mb-6">
          Las organizaciones necesitarán entender qué puestos de trabajo y qué
          talento es realmente híbrido/online y cual presencial. Necesitarán
          analizar y usar la creatividad para determinar cómo se hace el trabajo
          y estos nuevos enfoques podrían incluir el cambio de trabajo
          sincrónico al trabajo asincrónico.
        </p>
        <div className="space-y-4 flex flex-col items-center justify-center md:items-start md:justify-start md:flex-row md:space-y-0 md:space-x-4">
          <div className="w-48">
            <button
              className={`px-4 py-2 outline rounded-md outline-1 bg-white text-primary font-bold w-full`}
            >
              Descargar Gratis
            </button>
          </div>
          <div className="w-48">
            <BtnSm
              text={"Ver índice"}
              bgColor="transparent"
              textColor="white"
              otherClasses="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
