import React from 'react'

export default function Bill({name, iconUrl, isBill}) {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">
                    {name}
                </h4>
                <img 
                className="icon-img"
                src={iconUrl} 
                alt={name}
                />

            </div>
            
        </div>
    )
}
