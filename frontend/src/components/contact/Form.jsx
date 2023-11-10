import React from "react";
import "./form.css";

function Form() {
  function handleClickForm(e) {
    e.preventdefault();
  }
  return (
    <div className="formContainer">
      <form>
        <h2 id="titleForm">Pour nous contacter </h2>
        <input type="text" name="lastName" id="lastName" placeholder="Nom" />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Prénom"
        />
        <input type="email" name="email" id="email" placeholder="email" />
        <textarea name="message" id="message" cols="30" rows="10">
          Message
        </textarea>
        <div>
          <button type="button" onClick={handleClickForm}>
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
