import React, { Component } from 'react'
import Bill from "../components/Bill"
import BillContainer from './BillContainer'
// import Loader from "../components/Loader"


export default class BillsContainer extends Component {
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
