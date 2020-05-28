import React from "react";
import "../../sass/pages/_discographyItem.scss";

const DiscographyItem = ({title, coverCdFront, coverCdBack}) => {
  return (
    <div className="item-container" key={title}>
      <h1 className="cd-title">{title}</h1>
      <div className="thecard">
        <img className="cover front-cover" src={coverCdFront} alt="cover" />
        <img className="cover back-cover" src={coverCdBack} alt="cover" />
      </div>
      <button className="download-button">ściągnij płyte</button>
    </div>
  );
};

export default DiscographyItem;
