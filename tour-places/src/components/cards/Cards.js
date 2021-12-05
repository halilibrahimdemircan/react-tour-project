import "./Cards.css";
import React from "react";
import { data } from "../../helpers/data";

console.log(data);

export default function Cards() {
  return (
    <div className="card-container">
      {data.map((card, index) => {
        return (
          <div className="cards" key={index}>
            <div className="title">
              <h2>{card.title}</h2>
            </div>
            <img src={card.image} alt="" />
            <div className="card-over">
              <p>{card.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
