import "./hints.css";
import PropTypes from "prop-types";
import parisLocationHints from "../../data/parisLocationHints.json";

function Hints({ pictureAnatorParis }) {
  // je récupère l'index du tableau parisLocationHints avec pictureAnatorParis
  // je push les 5 hints sur un nouveau tableau
  const newHintsArray = [
    pictureAnatorParis.hint1,
    pictureAnatorParis.hint2,
    pictureAnatorParis.hint3,
    pictureAnatorParis.hint4,
    pictureAnatorParis.hint5,
  ];
  let randomIndex = "";
  const arrayHintstoDisplay = [];
  const gettingRandomNumberupTo5 = (max) => {
    randomIndex = Math.floor(Math.random() * max);
  };
  // merci Ayoub pour l'aide ^^
  const indexNumbers = new Set();
  while (indexNumbers.size < 3) {
    gettingRandomNumberupTo5(5);
    indexNumbers.add(randomIndex);
  }
  const newArray = [...indexNumbers];
  for (const index of newArray) {
    arrayHintstoDisplay.push(newHintsArray[index]);
  }
  // pour l'instant on code en dur les hints mais on pourra dans le futur les rendre plus dynamiques avec des states en fonction du click bouton
  return (
    <div className="hintsdisplay">
      <p>{parisLocationHints[2].hint1} </p>
      <span>Indice n°1 : {arrayHintstoDisplay[0]}</span>
      <span>Indice n°2 : {arrayHintstoDisplay[1]}</span>
      <span>Indice n°3 : {arrayHintstoDisplay[2]}</span>
    </div>
  );
}
Hints.propTypes = {
  pictureAnatorParis: PropTypes.shape({
    hint1: PropTypes.string,
    hint2: PropTypes.string,
    hint3: PropTypes.string,
    hint4: PropTypes.string,
    hint5: PropTypes.string,
  }).isRequired,
};

export default Hints;
