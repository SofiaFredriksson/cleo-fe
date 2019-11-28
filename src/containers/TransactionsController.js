import React, { Component } from 'react'
import  BillContainer from  "./BillContainer"


export default class TransactionsController extends Component {
    render() {
        const { bills, addOrRemoveBill } = this.props
        return (
            <div>
                {bills.map(bill => 
                    <BillContainer 
                    key={bill.id}
                    addOrRemoveBill={addOrRemoveBill}
                    bill={bill}/>
                )}
            </div>
        )
    }
}
