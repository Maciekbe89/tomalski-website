import React from "react";
import "./DiscographyItem.scss";

const DiscographyItem = ({title, coverCdFront, coverCdBack}) => {
  return (
    <div className="item-container" key={title}>
      <h1 className="cover-title">{title}</h1>
      <div className="thecard">
        <img className="cover front" src={coverCdFront} alt="cover" />
        <img className="cover back" src={coverCdBack} alt="cover" />
      </div>
      <button className="download-button">ściągnij płyte</button>
    </div>
  );
};

export default DiscographyItem;
