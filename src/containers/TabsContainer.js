import React, { Component } from 'react'
import API from "../services/api/API"
import Bills from "./BillsContainer"
import Transactions from "./TransactionsController"
import TabsButton from "../components/Button"

export default class Tabs extends Component {

    state = {
        bills: [],
        page: "Bills",
    }

    componentDidMount(){
        API.getBills()
        .then(bills => this.setState({bills}))
    }

    activeBills = () => {
        return this.state.bills.filter(bill => bill.isBill === true)
    }

    potentialBills = () => {
        return this.state.bills.filter(bill => bill.isBill === false)

    }

    setPage = (page) => {
        this.setState({
            page
        })
    }

    renderComponents = () => {
        switch (this.state.page) {
            case "Bills":
                return <Bills 
                    bills={this.activeBills()}
                />
                break;
            case "Transactions":
                return <Transactions
                    bills={this.potentialBills()}
                />
                break;
            deefault:
            return "hello"
                
        }
    }

    render() {
        const { page } = this.state
        return (
            <div>
                <TabsButton 
                page={page}  
                setPage={() => this.setPage(page === "Bills" ? "Transactions" : "Bills")}/>
                {this.renderComponents()}
            </div>
        )
    }
}
