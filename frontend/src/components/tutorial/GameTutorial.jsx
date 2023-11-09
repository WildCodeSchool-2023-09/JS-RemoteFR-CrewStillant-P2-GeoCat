import React, { useState } from "react";
import "./gameTutorial.css";
import MovingText from "react-moving-text";
import Modal from "./Modal";

function GameTutorial() {
  const [modal, setModal] = useState(false);
  function toggleModal() {
    setModal(!modal);
  }
  return (
    <div className="gameContent">
      <div className="gameContainer">
        <MovingText type="bounce" duration="2000ms" timing="ease" iteration="1">
          <h1>
            <span>GeoCat</span> Clique sur <span>Tutorial</span> pour comprendre
            son fonctionnement
          </h1>
        </MovingText>
        <MovingText
          type="fadeIn"
          delay="2s"
          duration="2000ms"
          timing="ease"
          iteration="1"
          direction="normal"
          forward="none"
        >
          <div className="buttonContainer">
            <button type="button" onClick={toggleModal}>
              Tutorial
            </button>
          </div>
        </MovingText>

        {modal && <Modal setModal={setModal} />}
      </div>
    </div>
  );
}

export default GameTutorial;
