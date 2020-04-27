import React from "react";
import "./DiscographyItem.css";
// import coverInfos from "../../utils/CoverInfos";

const DiscographyItem = ({title, coverCD}) => {
  return (
    <div className="item-container" key={title}>
      <h1 className="cover-title">{title}</h1>
      <img className="cover" src={coverCD} alt="cover" />
      <button className="download-button">ściągnij płyte</button>
    </div>
  );
};

export default DiscographyItem;
