import React, { useState, useEffect } from "react";
import Markers from "../components/Markers";
import Hints from "../components/hints/Hints";
import parisLocationHints from "../data/parisLocationHints.json";
import FooterHome from "../components/footer/FooterHome";

function Home() {
  const [arrParis, setArrParis] = useState(null);
  useEffect(() => {
    fetch(
      "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/arrondissements/records?limit=20"
    )
      .then((res) => res.json())
      .then((data) => setArrParis(data));
  }, []);
  // on veut géner un comportement aléatoire pour le state, qu'il se mette sur un index au hasard
  // on créé donc un let aléatoire qui va se coller en index sur le setState
  const districtIndex = Math.floor(
    Math.random() * parisLocationHints.length + 1
  );
  // création du state pour gérer l'aléatoire dans les pop-ups de Markers et lire son êtat dans hints
  const [pictureAnatorParis, setPictureAnatorParis] = useState(
    parisLocationHints[districtIndex]
  );
  const newHintsArray = [
    pictureAnatorParis.hint1,
    pictureAnatorParis.hint2,
    pictureAnatorParis.hint3,
  ];
  let randomIndex = "";
  const arrayHintstoDisplay = [];
  const gettingRandomNumberupTo5 = (max) => {
    randomIndex = Math.floor(Math.random() * max);
  };
  const indexNumbers = new Set();
  while (indexNumbers.size < 3) {
    gettingRandomNumberupTo5(5);
    indexNumbers.add(randomIndex);
  }
  const newArray = [...indexNumbers];
  for (const index of newArray) {
    arrayHintstoDisplay.push(newHintsArray[index]);
  }
  return (
    arrParis && (
      <div>
        <Hints
          newHintsArray={newHintsArray}
          setPictureAnatorParis={setPictureAnatorParis}
        />
        <Markers
          arrParis={arrParis}
          pictureAnatorParis={pictureAnatorParis}
          setPictureAnatorParis={setPictureAnatorParis}
        />
        <FooterHome />
      </div>
    )
  );
}
export default Home;
