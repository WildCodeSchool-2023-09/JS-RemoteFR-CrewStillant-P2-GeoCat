import React, { useState } from "react";
import PropTypes, { shape } from "prop-types";
import "./hints.css";
import { ShakeLittle } from "reshake";
import { useRemainingTries } from "../../contexts/RemainingTriesContext";

function Hints({ newHintsArray }) {
  const { remainingTries } = useRemainingTries();
  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const buttondisplayHint1 = () => {
    setButton1(true);
    setButton2(false);
    setButton3(false);
  };
  const buttondisplayHint2 = () => {
    setButton1(false);
    setButton2(true);
    setButton3(false);
  };
  const buttondisplayHint3 = () => {
    setButton1(false);
    setButton2(false);
    setButton3(true);
  };

  return (
    <div className="divHintsGeneral">
      <div className="buttontodisplayHints">
        <ShakeLittle>
          <button
            type="button"
            className="buttonHints"
            onClick={buttondisplayHint1}
          >
            1
          </button>
        </ShakeLittle>
        <ShakeLittle>
          <button
            type="button"
            className={`${
              remainingTries < 3
                ? "buttonHints"
                : "buttonHints buttonNotDisplaying"
            }`}
            onClick={buttondisplayHint2}
          >
            2
          </button>
        </ShakeLittle>
        <ShakeLittle>
          <button
            type="button"
            className={`${
              remainingTries < 2
                ? "buttonHints"
                : "buttonHints buttonNotDisplaying"
            }`}
            onClick={buttondisplayHint3}
          >
            3
          </button>
        </ShakeLittle>
      </div>
      <div className="hintsdisplay">
        <div className={`${button1 ? "" : "notdisplayingHint"}`}>
          <p> Indice n°1 : {newHintsArray[0]} </p>
        </div>
        <div className={`${button2 ? "" : "notdisplayingHint"}`}>
          <p> Indice n°2 : {newHintsArray[1]} </p>
        </div>
        <div className={`${button3 ? "" : "notdisplayingHint"}`}>
          <p> Indice n°3 : {newHintsArray[2]} </p>
        </div>
      </div>
    </div>
  );
}

Hints.propTypes = {
  newHintsArray: PropTypes.arrayOf(shape).isRequired,
};

export default Hints;
