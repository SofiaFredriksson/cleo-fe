import React, { Component } from "react";
import "./Transaction.scss";

export default class Transaction extends Component {
  render() {
    const { amount, date } = this.props;
    return (
      <div className="transaction-card">
        <div className="card-body">
          <h4>{date}</h4>
          <p>Amount: {amount}</p>
        </div>
      </div>
    );
  }
}
