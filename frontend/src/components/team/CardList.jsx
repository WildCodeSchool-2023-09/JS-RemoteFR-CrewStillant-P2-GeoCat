import React from "react";
import "./cardList.css";
import Card from "./Card";
import data from "../../data/cardInfo";

function CardList() {
  const cardInfo = data;
  return (
    <div className="cardListContainer">
      {cardInfo.map((card) => (
        <Card
          key={card.id}
          srcImg={card.srcImg}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}

export default CardList;
