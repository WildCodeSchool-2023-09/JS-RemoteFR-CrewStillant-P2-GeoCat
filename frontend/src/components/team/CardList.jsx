import React from "react";
import Card from "./Card";
import data from "../../data/cardInfo";

function CardList() {
  const cardInfo = data;
  return (
    <>
      {cardInfo.map((card) => (
        <Card
          key={card.id}
          srcImg={card.srcImg}
          title={card.title}
          description={card.description}
        />
      ))}
    </>
  );
}

export default CardList;
