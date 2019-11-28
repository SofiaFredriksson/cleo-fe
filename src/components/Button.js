import React from 'react'

export default function Button({input, clickHandler}) {
    return (
        <div className="button-div">
            <button
            onClick={clickHandler}
            >
            {input}
            </button>
        </div>
    )
}
