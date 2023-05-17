import React from "react";
import "./styles/Hero.css";

const SubHero = () => {
  const playlist = [
    { id: 1, title: "Unavailable", artist: "Davido" },
    { id: 1, title: "Unavailable", artist: "Davido" },
    { id: 1, title: "Unavailable", artist: "Davido" },
    { id: 1, title: "Unavailable", artist: "Davido" },
    { id: 1, title: "Unavailable", artist: "Davido" },
  ];

  return (
    <div>
      <div className="hero-right">
        <h3>Trending songs</h3>
        <div className="playlist-container">
          {playlist.map((playlistItem) => (
            <div className="playlist" key={playlistItem.id}>
              <p>
                {playlistItem.title} by <span>{playlistItem.artist}</span>
              </p>
              <button>&#43;</button>
            </div>
          ))}
        </div>
        <button className="last-btn">View more</button>
      </div>
    </div>
  );
};

export default SubHero;
