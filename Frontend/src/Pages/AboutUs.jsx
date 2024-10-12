import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Faculty from "./Faculty";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us "}
        imageUrl={"/about.jpg"}
      />
     <Faculty image={'/ambulance.jpg'}/>
    </>
  );
};

export default AboutUs;