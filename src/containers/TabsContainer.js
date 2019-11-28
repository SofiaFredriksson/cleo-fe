import React, { Component } from 'react'
import API from "../services/api/API"
import Bills from "./BillsContainer"
import TabsButton from "../components/Button"
import Title from "../components/Title"
import Loader from "../components/Loader"


export default class Tabs extends Component {

    state = {
        bills: [],
        page: "Bills",
    }

    componentDidMount(){
        API.getBills()
        .then(bills => this.setState({
            bills,
        }))
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
                addOrRemoveBill={this.addOrRemoveBill}
                bills={this.activeBills()}
                />
            case "Transactions":
                return <Bills
                addOrRemoveBill={this.addOrRemoveBill}
                bills={this.potentialBills()}
                />
            default:
            return <Loader />   
        }
    }

    addOrRemoveBill = (id, data) => {
        API.updateBill(id, data)
        .then(updatedBill => this.setState({
            bills: this.state.bills.map(bill => {
                if (bill.id !== updatedBill.id) return bill;
                return updatedBill;
              })
        })
        )
    }

    render() {
        const { page } = this.state
        const pageCondition = (page === "Bills" ? "Transactions" : "Bills")
        
        return (
            <div>
                <Title 
                title={page}
                />

                <TabsButton 
                input={`View ${pageCondition}`}  
                clickHandler={() => this.setPage(pageCondition)}
                />
                
                {this.renderComponents()}
            </div>
        )
    }
}
