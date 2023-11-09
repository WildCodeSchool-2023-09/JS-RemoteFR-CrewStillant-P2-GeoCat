import React, { useState, useEffect } from "react";
import Markers from "../components/Markers";
import Hints from "../components/hints/Hints";
import parisLocationHints from "../data/parisLocationHints.json";

function Home() {
  // création de la state pour stocker une api
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
  // ces console.log servent à tricher dans le jeu et est donc indispensable pour la branche dev
  // console.log(districtIndex);
  // console.log(parisLocationHints[districtIndex].district);
  return (
    arrParis && (
      <div>
        <Hints pictureAnatorParis={pictureAnatorParis} />
        <Markers
          arrParis={arrParis}
          pictureAnatorParis={pictureAnatorParis}
          setPictureAnatorParis={setPictureAnatorParis}
        />
      </div>
    )
  );
}

export default Home;
