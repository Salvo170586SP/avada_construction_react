import React from "react";
import JumbotronMenu from "../components/JumbotronMenu";
import Construcition from "../components/Construction";
import TrustedPartnes from "../components/TrustedPartners";
import BuildingSpaces from "../components/BuildingSpaces";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <JumbotronMenu />
      <Construcition />
      <TrustedPartnes />
      <BuildingSpaces />
      <Footer />
    </>
  );
};

export default HomePage;
