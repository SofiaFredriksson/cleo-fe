import React, { Component } from 'react'
import Bill from "../components/Bill"


export default class BillsContainer extends Component {
    render() {

        const { bills } = this.props
        return (
            <div>
                {bills.map(bill => 
                    <Bill
                    {...bill}
                    />
                )}
            </div>
        )
    }
}
