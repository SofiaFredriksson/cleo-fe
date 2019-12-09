import React from "react"
import "./Transaction.scss"

export default function Transaction({ date, amount }) {
  return (
    <div className="card">
      <div className="card-body">
        <h4>{date}</h4>
        <p>Amount: {amount}</p>
      </div>
    </div>
  )
}
