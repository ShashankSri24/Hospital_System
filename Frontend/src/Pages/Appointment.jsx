import React from "react";
import AppointmentForm from "../components/AppointmentForm";
import Hero from "../components/Hero";


const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | As We are Providing Best "}
        imageUrl={"/appointment.jpg"}
      />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;