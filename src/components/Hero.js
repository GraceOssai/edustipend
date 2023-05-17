import React from "react";
import "./styles/Hero.css";
import SubHero from "./SubHero";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-section">
        <div className="hero-left">
          <h1>Make your party fun!</h1>
          <p>Create your own custom playlist today.</p>
          <button className="hero-btn">Create playlist</button>
        </div>
        <SubHero/>
      </div>
    </div>
  );
};

export default Hero;
