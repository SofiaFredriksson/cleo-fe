import React, { Component } from 'react'
import  BillContainer from  "./BillContainer"


export default class TransactionsController extends Component {
    render() {

        const { bills } = this.props

        return (
            <div>
                {bills.map(bill => 
                    <BillContainer bill={bill}/>
                )}
            </div>
        )
    }
}
