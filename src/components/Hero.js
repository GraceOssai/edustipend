import React from "react";
import "./styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-section">
        <div className="hero-left">
          <h1>Make your party fun!</h1>
          <p>Create your own custom playlist today.</p>
          <button className="hero-btn">Create playlist</button>
        </div>
        <div className="hero-right">
          <h3>Trending songs</h3>
          <div className="playlist-container">
            <div className="playlist">
              <p>
                Unavailable by <span>Davido</span> <button>&#43;</button>
              </p>
            </div>
            <div className="playlist">
              <p>
                Unavailable by <span>Davido</span> <button>&#43;</button>
              </p>
            </div>
            <div className="playlist">
              <p>
                Unavailable by <span>Davido</span> <button>&#43;</button>
              </p>
            </div>
            <div className="playlist">
              <p>
                Unavailable by <span>Davido</span> <button>&#43;</button>
              </p>
            </div>
            <div className="playlist">
              <p>
                Unavailable by <span>Davido</span> <button>&#43;</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
