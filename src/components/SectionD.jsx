import React from "react";
import { BtnSm } from "./Button";

const SectionD = () => {
  return (
    <div className="flex w-full items-center bg-secondary">
      <div className="pt-20 pl-8 pr-5 w-1/2 hidden md:block bg-primary">
        <img src="/images/section-d.png" alt="section-d" className="" />
      </div>

      <div className="py-16 md:w-1/2 md:pl-5 md:px-5 md:pr-24 p-5">
        <h2 className="text-3xl font-bold mb-10">
          Llena el formulario y descarga el Reporte
        </h2>

        <div className="w-full space-y-6">
          <div className="flex items-center justify-between md:space-x-5 w-full space-y-4 md:space-y-0 flex-wrap md:flex-nowrap">
            <div className="flex flex-col space-y-2 w-full">
              <label className="font-medium">Nombre</label>
              <input
                type="text"
                className="outline-none border-b-2 border-black py-3 px-5 bg-secondary md:w-full w-full"
                placeholder="Placeholder"
              />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label className="font-medium">Apellido</label>
              <input
                type="text"
                className="outline-none bg-secondary border-b-2 border-black py-3 px-5 md:w-full w-full"
                placeholder="Placeholder"
              />
            </div>
          </div>
          <div className="flex items-center justify-between md:space-x-5 w-full space-y-4 md:space-y-0 flex-wrap md:flex-nowrap">
            <div className="flex flex-col space-y-2 w-full">
              <label className="font-medium">Email</label>
              <input
                type="text"
                className="outline-none border-b-2 border-black py-3 px-5 bg-secondary md:w-full w-full"
                placeholder="Placeholder"
              />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label className="font-medium">Celular</label>
              <input
                type="text"
                className="outline-none bg-secondary border-b-2 border-black py-3 px-5 md:w-full w-full"
                placeholder="Placeholder"
              />
            </div>
          </div>
          <div className="flex items-center justify-between md:space-x-5 w-full space-y-4 md:space-y-0 flex-wrap md:flex-nowrap">
            <div className="flex flex-col space-y-2 w-full">
              <label className="font-medium">Empresa</label>
              <input
                type="text"
                className="outline-none border-b-2 border-black py-3 px-5 bg-secondary md:w-full w-full"
                placeholder="Placeholder"
              />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label className="font-medium">Puesto</label>
              <select className="outline-none bg-secondary border-b-2 border-black py-3 px-5 md:w-full w-full">
                <option value="">Placeholder</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-between md:space-x-5 w-full space-y-4 md:space-y-0 flex-wrap md:flex-nowrap">
            <div className="flex flex-col space-y-2 w-full">
              <label className="font-medium">Cantidad de empleados</label>
              <select className="outline-none bg-secondary border-b-2 border-black py-3 px-5 md:w-full w-full">
                <option value="">Placeholder</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label className="font-medium">Area</label>
              <select className="outline-none bg-secondary border-b-2 border-black py-3 px-5 md:w-full w-full">
                <option value="">Placeholder</option>
              </select>
            </div>
          </div>
          <div className="flex items-center w-full space-x-4">
            <input type="checkbox" className="h-8 w-8" />
            <label className="font-semibold">
              He leido y acepto los terminos y condiciones
            </label>
          </div>

          <BtnSm
            text={"Enviar"}
            bgColor="primary"
            textColor="white"
            otherClasses="w-full md:w-48"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionD;
