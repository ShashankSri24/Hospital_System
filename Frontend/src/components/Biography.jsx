import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Medicare Hospital is dedicated to providing high-quality healthcare services to patients of all ages, with a focus on compassion, innovation, and accessibility. Our state-of-the-art facilities are equipped with advanced medical technology and staffed by a team of skilled healthcare professionals committed to delivering personalized care. We offer a wide range of services, including emergency care, surgical procedures, and specialized treatments, all designed to meet the diverse needs of our community. At Medicare Hospital, we prioritize patient well-being, ensuring a supportive environment where individuals can receive the care they deserve while navigating their health journeys.
          </p>
          <p>
          In addition to our comprehensive medical services, we provide a range of support programs, including mental health services, nutritional counseling, and rehabilitation therapies. Our commitment to community engagement means we frequently host health fairs, screenings, and workshops to promote wellness and disease prevention.

We also understand the importance of convenience, which is why we offer online appointment scheduling, telehealth options, and an easy-to-navigate patient portal for accessing medical records and test results. At Medicare Hospital, we believe that exceptional care goes beyond treatment; it encompasses building lasting relationships with our patients and fostering a healing environment that nurtures both body and mind.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;