import React from 'react'

export default function Button({input, clickHandler}) {
    return (
        <div className="card">
            <button
            className="page-button"
            onClick={clickHandler}
            >
            {input}
            </button>
        </div>
    )
}
