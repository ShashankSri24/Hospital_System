import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Department from "../components/Department";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to MediCare Hospital | Your Health depends on us"
        }
        imageUrl={"/front.jpg"}
      />
      <Biography imageUrl={"/about.jpg"} />
      
      <Department />
      <MessageForm />
    </>
  );
};

export default Home;