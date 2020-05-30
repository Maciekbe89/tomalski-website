import React, {useState, useEffect} from "react";
import TmlPortait from "../assets/tml.png";

const About = () => {
  const [move, setMove] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      setMove(move + 2);
    }, 30);
    return () => clearInterval(id);
  });

  return (
    <div className="container-about" id="about">
      <div
        className="record"
        style={{transform: `translateY(40%) rotate(${move}deg)`}}
      />

      <h1 className="about-title">o mnie</h1>
      <img className="image-about" src={TmlPortait} alt="portrait" />
      <p className="about-text">
        Tomasz „Tomalski”, raper z warszawskich Jelonek. Swoją przygodę z rapem
        rozpoczął już na przełomie tysiąclecia, gdzie wraz z Juniorem utworzył
        zespół „Jelonki Skład”. Przy okazji promocji drugiej płyty w 2004 roku,
        grupa wystąpiła w legendarnej audycji „Rap Time” prowadzonej przez Druha
        Sławka w rozgłośni Radiostacja. Następnie w 2006 roku wyszedł pierwszy
        solowy materiał pt: ”Ukryty Sens”. Po niespełna dwóch latach, w 2008
        roku wyszedł kolejny grupowy projekt, MłodyBe&Tomal „Na kartkach pasja”.
        Z materiałem udało się zagrać kilkadziesiąt koncertów, wystąpić w
        licznych konkursach i rapowych audycjach radiowych. Na następną płytę
        przyszło czekać 12 lat - „0.01 Klimatyczne EP 2020”, to najnowszy solowy
        materiał. Prywatnie Tomalski jest kolekcjonerem płyt cd i vinyli z
        polskim rapem.
      </p>
    </div>
  );
};

export default About;
