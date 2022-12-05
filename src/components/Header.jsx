import { BtnSm } from "./Button";
import React from "react";

const Header = () => {
  return (
    <header className="w-full px-8 py-4 md:py-5 md:px-20 flex item-center justify-between">
      <div className="flex items-center">
        <img src="/images/logo.png" alt="logo" className="w-20 md:w-3/4" />
      </div>
      <a href="#Formulario">
        <BtnSm text="Contáctanos" textColor="black" bgColor="white" />
      </a>
    </header>
  );
};

export default Header;
