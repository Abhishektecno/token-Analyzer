import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Sunrise Community Hospital prides itself on delivering personalized healthcare solutions. 
            Our team of MBBS-educated doctors is equipped to address diverse health challenges, 
            ensuring patients receive tailored treatment plans. Through meticulous assessment of individual 
            circumstances, we match patients with suitable specialists, optimizing their journey towards recovery. 
            Experience compassionate care and expert medical guidance at Sunrise Community Hospital.

          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;