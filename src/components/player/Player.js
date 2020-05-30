import React from "react";
import MusicPlayer from "react-responsive-music-player";
import playlist from "./playlist";

const Player = () => {
  return (
    <div className="player-container" id="player">
      <div className="music-player">
        <MusicPlayer
          playlist={playlist}
          style={{
            fontSize: "24px",
            maxWidth: "none",
          }}
          mode="vertical"
          progressColor="#f79c00"
          btnColor="white"
        />
      </div>
    </div>
  );
};

export default Player;
