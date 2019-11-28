import React, { Component } from 'react'
import Bill from "../components/Bill"
import Transaction from "../components/Transaction"
import Button from '../components/Button'

export default class BillContainer extends Component {
    state = {
        clicked: false
    }

    clickedCondition = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }
    render() {
        const { bill } = this.props
        return (
            
            <div className="card">
                <>
                    <Bill 
                    {...bill} 
                    handleClick={this.clickedCondition}
                    
                    /> 
                    <Button
                    clickHandler={() => console.log("YOYOYO")}
                    input={bill.isBill ? "Remove Bill" : "Add as Bill"}
                    />
                </>
                {
                this.state.clicked 
                 ?
                bill.transactions.map(transaction => <Transaction key={transaction.id} {...transaction}/>)
                :
                null
                }
            </div>
            

        )
    }
}
