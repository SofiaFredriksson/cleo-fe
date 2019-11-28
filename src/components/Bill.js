import React from 'react'
import { imgUrl } from "../services/shared/constants"

export default function Bill({name, iconUrl, isBill}) {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">
                    {name}
                </h4>
                <img 
                className="icon-img"
                src={imgUrl.emoji}
                alt={name}
                />

            </div>
            
        </div>
    )
}
