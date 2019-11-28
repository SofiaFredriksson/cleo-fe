import React from 'react'
import { imgUrl } from "../services/shared/constants"
import Button from "./Button"

export default function Bill({name, transactions, handleClick}) {
    return (
        <div className="card"
        onClick={() =>  handleClick()}>
            <div className="card-body">
                <h4 className="card-title">
                    {name}
                </h4>
                <img 
                className="icon-img"
                src={imgUrl.emoji}
                alt={name}
                />
                <p>
                    Transactions: {transactions.length}
                </p>
                

            </div>
            
        </div>
    )
}
