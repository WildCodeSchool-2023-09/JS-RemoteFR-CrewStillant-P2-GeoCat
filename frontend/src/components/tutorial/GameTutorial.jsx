import React, { useState } from "react";
import "./gameTutorial.css";
import Modal from "./Modal";

function GameTutorial() {
  const [modal, setModal] = useState(false);
  function toggleModal() {
    setModal(!modal);
  }
  return (
    <div className="gameContent">
      <div className="gameContainer">
        <h1>
          <span>GeoCat</span> Clique sur <span>Tutorial</span> pour comprendre
          son fonctionnement
        </h1>
        <div className="buttonContainer">
          <button type="button" onClick={toggleModal}>
            Tutorial
          </button>
        </div>
        {modal && <Modal setModal={setModal} />}
      </div>
    </div>
  );
}

export default GameTutorial;
