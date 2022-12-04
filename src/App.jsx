import React from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import SectionA from "./components/SectionA";
import SectionB from "./components/SectionB";
import SectionC from "./components/SectionC";
import SectionD from "./components/SectionD";
import SectionE from "./components/SectionE";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <SectionA />
        <SectionB />
        <SectionC />
        <SectionD />
        <SectionE />
      </main>
    </>
  );
}
