import React from "react";
import { BtnSm } from "./Button";
import HubspotForm from 'react-hubspot-form';

const SectionD = () => {
  return (
    <div className="flex w-full items-center bg-secondary">
      <div className="pt-20 pl-8 pr-5 w-1/2 hidden md:block bg-primary">
        <img src="/images/section-d.png" alt="section-d" className="" />
      </div>

      <div className="py-16 md:w-1/2 md:pl-5 md:px-5 md:pr-24 p-5" id="Formulario">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Llena el formulario y descarga el Reporte
        </h2>

        <div className="w-full space-y-6 p-7">
          <HubspotForm
                portalId='21198826'
                formId='161f7d8c-5ee2-4d0b-9273-abde996c2fe6'
                onSubmit={() => console.log('Submit!')}
                onReady={(form) => console.log('Form ready!')}
                loading={<div>Loading...</div>}
            />
        </div>
      </div>
    </div>
  );
};

export default SectionD;
