import React from "./node_modules/react";
import DiscographyItem from "./DiscographyItem";
import coverInfos from "../../utils/CoverInfos";
import "./Discography.css";

const Discography = () => {
  return (
    <div className="pages-container discography-container" id="discography">
      <h1 className="title">dyskografia</h1>
      <div className="cds-container">
        {coverInfos.map((coverInfo) => (
          <DiscographyItem key={coverInfo.title} {...coverInfo} />
        ))}
      </div>
    </div>
  );
};

export default Discography;
