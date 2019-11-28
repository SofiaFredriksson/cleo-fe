import React, { Component } from 'react'

export default class Transaction extends Component {
    render() {
        const { amount, date } = this.props
        return (
            <div className="transaction-card">
                <div className="card-body">
                    <h4 className="card-title">
                        {date}
                    </h4>
                    <p>
                        Amount: {amount}
                    </p>
                </div>
            </div>
        )
    }
}
