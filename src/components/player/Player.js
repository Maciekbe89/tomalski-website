import React from "react";
import MusicPlayer from "react-responsive-music-player";
import playlist from "./playlist";
import "./Player.css";

const Player = () => {
  return (
    <div className="pages-container player-container" id="player">
      <h1 className="player-title">odsłuch płyty</h1>
      <div className="music-player">
        <MusicPlayer
          playlist={playlist}
          style={{color: "white"}}
          progressColor="#f79c00"
          btnColor="white"
          width="100%"
        />
      </div>
    </div>
  );
};

export default Player;
