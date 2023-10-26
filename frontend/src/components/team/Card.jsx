import React from "react";
import "./card.css";
import PropTypes from "prop-types";

function Card({ srcImg, title, description }) {
  return (
    <div className="content">
      <div className="cardContainer">
        <div className="imgContainer">
          <img src={srcImg} alt="icon" />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
Card.propTypes = {
  srcImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
