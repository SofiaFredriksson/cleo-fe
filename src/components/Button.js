import React from 'react'

export default function Button({page, setPage}) {
    return (
        <div className="card">
            <button
            className="page-button"
            onClick={setPage}
            >
            {page}
            </button>
        </div>
    )
}
