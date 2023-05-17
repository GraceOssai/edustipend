import React from "react";
import "./styles/Hero.css";

const SubHero = () => {
  const playlist = [
    { id: 1, title: "Unavailable", artist: "Davido" },
    { id: 2, title: "Unavailable", artist: "Davido" },
    { id: 3, title: "Unavailable", artist: "Davido" },
    { id: 4, title: "Unavailable", artist: "Davido" },
    { id: 5, title: "Unavailable", artist: "Davido" },
    { id: 6, title: "Unavailable", artist: "Davido" },
    { id: 7, title: "Unavailable", artist: "Davido" },
    { id: 8, title: "Unavailable", artist: "Davido" },
    { id: 9, title: "Unavailable", artist: "Davido" },
    { id: 10, title: "Unavailable", artist: "Davido" },
  ];

  const [isShown, setIsShown] = React.useState(false);

  function toggle() {
    setIsShown((prev) => !prev);
  }

  const displayedPlaylist = isShown ? playlist : playlist.slice(0, 5);

  return (
    <div>
      <div className="hero-right">
        <h3>Trending songs</h3>
        <div className="playlist-container">
          {displayedPlaylist.map((playlistItem) => (
            <div className="playlist" key={playlistItem.id}>
              <p>
                {playlistItem.title} by <span>{playlistItem.artist}</span>
              </p>
              <button>&#43;</button>
            </div>
          ))}
        </div>
        <button className="last-btn" onClick={toggle}>
          {isShown ? "Hide" : "View more"}
        </button>
      </div>
    </div>
  );
};

export default SubHero;
