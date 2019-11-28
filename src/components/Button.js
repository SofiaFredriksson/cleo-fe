import React from 'react'

export default function Button({page, setPage}) {
    return (
        <div>
            <button
                onClick={setPage}
            >
                {page}
            </button>
        </div>
    )
}
