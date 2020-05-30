import React from "react";

const DiscographyItem = ({title, coverCdFront, coverCdBack, download}) => {
  return (
    <div className="item-container" key={title}>
      <h1 className="cd-title">{title}</h1>
      <div className="thecard">
        <img className="cover front-cover" src={coverCdFront} alt="cover" />
        <img className="cover back-cover" src={coverCdBack} alt="cover" />
      </div>
      <button className="download-button">
        <a className="link" href={download}>
          ściągnij płyte
        </a>
      </button>
    </div>
  );
};

export default DiscographyItem;
