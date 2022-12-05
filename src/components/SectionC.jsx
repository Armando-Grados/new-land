import { BtnSm } from "./Button";
import React from "react";

const SectionC = () => {
  return (
    <div className="py-16 md:px-24 px-5 md:space-x-5 md:flex md:flex-row flex-col md:items-center">
      <div>
        <img src="/images/section-c.png" alt="section-c" />
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">
          Índice de contenidos
        </h2>
        <ul className="font-medium text-lg space-y-4">
          <li>
            <span className="text-primary mr-2 font-bold md:text-2xl">1.</span>{" "}
            Objetivos y ficha metodológica
          </li>
          <li>
            <span className="text-primary mr-2 font-bold md:text-2xl">2.</span>{" "}
            Distribución de respuestas
          </li>
          <li>
            <span className="text-primary mr-2 font-bold md:text-2xl">3.</span>{" "}
            Nuevas modalidades de trabajo
          </li>
          <li>
            <span className="text-primary mr-2 font-bold md:text-2xl">4.</span>{" "}
            Ventajas y desventajas de las nuevas modalidades de trabajo
          </li>
          <li>
            <p>
              <span className="text-primary mr-2 font-bold md:text-2xl">
                5.
              </span>{" "}
              Habilidades del futuro
            </p>
            <ul className="ml-5 space-y-2">
              <li>
                <span className="text-primary mr-2 font-bold md:text-2xl">
                  5.1
                </span>{" "}
                Soft skills
              </li>
              <li>
                <p>
                  <span className="text-primary mr-2 font-bold md:text-2xl">
                    5.2
                  </span>{" "}
                  Hard skills
                </p>
                <ul className="ml-5">
                  <li>
                    <span className="text-primary mr-2 font-bold md:text-2xl">
                      5.2.1
                    </span>{" "}
                    Habilidades digitales
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <span className="text-primary mr-2 font-bold md:text-2xl">6.</span>{" "}
            Capacitaciones
          </li>
          <li>
            <span className="text-primary mr-2 font-bold md:text-2xl">7.</span>{" "}
            Conclusiones
          </li>
        </ul>
        <div className="space-y-4 flex flex-col items-center justify-center md:items-start md:justify-start md:flex-row md:space-y-0 md:space-x-4">
          <a href="#Formulario">
            <BtnSm
              text={"Descargar Gratis"}
              textColor="white"
              bgColor="primary"
              otherClasses="w-48"
            />
          </a>
          
          <h4 className="font-medium w-32 text-center text-sm">
            +50 personas ya han descargado
          </h4>
        </div>
      </div>
    </div>
  );
};
export default SectionC;
