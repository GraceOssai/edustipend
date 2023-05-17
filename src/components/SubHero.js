import React from 'react'
import './styles/SubHero.css'
import './styles/Hero.css'

const SubHero = () => {
  return (
    <div>
      <div className="hero-right">
          <h3>Trending songs</h3>
          <div className="playlist-container">
            <div className="playlist">
              <p>
                Unavailable by <span>Davido</span>
              </p>
              <button>&#43;</button>
            </div>
          </div>
          <button className="last-btn">View more</button>
        </div>
    </div>
  )
}

export default SubHero