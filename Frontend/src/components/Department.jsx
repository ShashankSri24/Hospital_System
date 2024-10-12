import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Department = () => {
    const departmentsArray = [
        {
          name: "Pediatrics",
          imageUrl: "/departments/Pediatrics.jpg",
        },
        {
          name: "Orthopedics",
          imageUrl: "/departments/Orthopedics.jpg",
        },
        {
          name: "Cardiology",
          imageUrl: "/departments/cardio.jpg",
        },
        {
          name: "Neurology",
          imageUrl: "/departments/neuro.jpg",
        },
        {
          name: "Oncology",
          imageUrl: "/departments/oncology.jpg",
        },
        {
          name: "Radiology",
          imageUrl: "/departments/radiology.WEBP",
        },
        {
          name: "Physical Therapy",
          imageUrl: "/departments/physicaltherapy.jpg",
        },
        {
          name: "Dermatology",
          imageUrl: "/departments/dermology.jpg",
        },
        {
          name: "ENT",
          imageUrl: "/departments/ENT-1.jpg",
        },
      ];
      const responsive = {
        extraLarge: {
          breakpoint: { max: 3000, min: 1324 },
          items: 4,
          slidesToSlide: 1, 
        },
        large: {
          breakpoint: { max: 1324, min: 1005 },
          items: 3,
          slidesToSlide: 1, 
        },
        medium: {
          breakpoint: { max: 1005, min: 700 },
          items: 2,
          slidesToSlide: 1, 
        },
        small: {
          breakpoint: { max: 700, min: 0 },
          items: 1,
          slidesToSlide: 1, 
        },
      };
  return (
      <div className="container departments">
        <h2>Departments</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            "medium",
            "small",
          ]}
        >
          {departmentsArray.map((depart, index) => {
            return (
              <div key={index} className="card">
                <div className="depart-name">{depart.name}</div>
                <img src={depart.imageUrl} alt="Department" />
              </div>
            );
          })}
        </Carousel>
      </div>
    
  )
}

export default Department
