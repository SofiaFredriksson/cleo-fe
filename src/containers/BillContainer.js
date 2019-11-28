import React, { Component } from 'react'
import Bill from "../components/Bill"
import Transaction from "../components/Transaction"

export default class BillContainer extends Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }
    render() {
        const { bill } = this.props
        return (
            this.state.clicked 
            ?
            <div className="card"
            onClick={() => this.handleClick()}>
                <Bill {...bill} handleClick={this.handleClick}/>
                {bill.transactions.map(transaction => <Transaction {...transaction}/>)}

            </div>
            :
            <Bill {...bill} handleClick={this.handleClick}/>
        )
    }
}
