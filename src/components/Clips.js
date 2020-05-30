import React from "react";

const videoSrc = "https://www.youtube.com/embed/e4a4RE540wg";

const Clips = () => {
  return (
    <div className="clips-container" id="clips">
      <h1 className="clips-title">
        Tomalski - Szukam sensu prod. Pawko, skrecze DjZel
      </h1>
      <iframe className="clip-yt" title="video player" src={videoSrc} />
    </div>
  );
};

export default Clips;
