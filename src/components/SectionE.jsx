import { BtnSm } from "./Button";

const SectionE = () => {
  return (
    <div className="md:px-24 py-20 px-5 flex-col md:flex-row space-y-10 flex items-center md:space-x-5 w-full">
      <div>
        <h2 className="font-bold text-4xl mb-8">
          ¿Quieres formar parte de NEO?
        </h2>
        <p className="mb-6">
          En Neo queremos atraer y desarrollar personas que vean en digital una
          oportunidad para fortalecer organizaciones y crear un mundo más
          consciente.
        </p>
        <div className="space-y-4 flex flex-col items-center justify-center md:items-center md:justify-start md:flex-row md:space-y-0 md:space-x-4">
          <BtnSm
            bgColor="primary"
            textColor="white"
            text={"Envíanos tu CV"}
            otherClasses="w-full md:w-fit"
          />
          <h4 className="font-medium text-center w-full md:w-fit">
            Ver vacantes &#8594;
          </h4>
        </div>
      </div>

      <div>
        <img src="/images/section-e.jpg" alt="section-e" />
      </div>
    </div>
  );
};

export default SectionE;
