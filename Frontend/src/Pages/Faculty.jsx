import React from 'react'

const Faculty = ({image}) => {
  return (
    <div>
       <div className="container biography">
        <div className="banner">
          <img src={image}  alt="faculty" />
        </div>
        <div className="banner">
          <p>Our Faculty</p>
          <p>
          At Medicare Hospital, we offer a comprehensive range of services designed to meet the diverse needs of our patients, including a fully equipped ambulance service available 24/7. Our ambulances are staffed by trained medical professionals who provide emergency care during transport, ensuring that patients receive timely assistance when it matters most.</p>

<p>In addition to our ambulance services, we have a dedicated team of specialists across various fields, including cardiology, orthopedics, pediatrics, and geriatrics, providing expert care tailored to each patient's condition. Our state-of-the-art diagnostic imaging and laboratory facilities allow for quick and accurate assessments, facilitating prompt treatment decisions.</p>
          
        </div>
      </div>
    </div>
  )
}

export default Faculty
