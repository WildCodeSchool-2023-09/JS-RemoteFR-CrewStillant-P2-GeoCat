import React from "react";
import "./modal.css";
import PropTypes from "prop-types";

function Modal({ setModal }) {
  function closeModal() {
    setModal(false);
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <h1>Fonctionnement du jeu</h1>
        <p>
          Vous avez jusqu'à 3 clics pour géolocaliser notre chat parmi les 24
          fuseaux horaires. <br /> Vous aurez des indices en haut de votre page,
          pour vous aider à le retrouver. <br /> Vous trouverez aussi sur le bas
          de votre page le nombre de clics qui vous restent.{" "}
        </p>
        <button type="button" onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
}
Modal.propTypes = {
  setModal: PropTypes.bool.isRequired,
};

export default Modal;
