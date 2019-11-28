import React from 'react'
import cleoCoin from "../assets/cleo_coin.jpg"

export default function Header() {
    return (
        <div className="header">
            <img
            className="icon-img"
            src={cleoCoin}
            alt="welcome"
            />
        </div>
    )
}
