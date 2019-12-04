import React from "react";
import cleoCoin from "../assets/cleo_coin.jpg";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <img src={cleoCoin} alt="welcome" />
    </div>
  );
}
