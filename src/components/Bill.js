import React from "react";
import { imgUrl } from "../services/shared/constants";
import "./Bill.scss";

export default function Bill({ name, transactions, handleClick, iconUrl }) {
  return (
    <div className="card" onClick={() => handleClick()}>
      <div className="card-body">
        <h4>{name}</h4>
        <img
          className="icon-img"
          //some of the image links were broken so I used another one instead, can be replaced with `iconUrl`
          src={imgUrl.emoji}
          alt={name}
        />
        <p>Transactions: {transactions.length}</p>
      </div>
    </div>
  );
}
