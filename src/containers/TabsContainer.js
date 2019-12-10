import React, { Component } from "react"
import API from "../services/api/API"
import Bills from "./BillsContainer"
import TabsButton from "../components/Button"
import Title from "../components/Title"
import Loader from "../components/Loader"

export default class Tabs extends Component {
  state = {
    bills: [],
    page: "Bills"
  }

  componentDidMount() {
    API.getBills()
      .then(bills =>
        this.setState({
          bills
        })
      )
      .catch(error => {
        console.log(error)
      })
  }

  specificBills = type => this.state.bills.filter(bill => bill.isBill === type)

  setPage = page => {
    this.setState({
      page
    })
  }

  renderComponents = () => {
    switch (this.state.page) {
      case "Bills":
        return (
          <Bills
            addOrRemoveBill={this.addOrRemoveBill}
            bills={this.specificBills(true)}
          />
        )
      case "Potential Bills":
        return (
          <Bills
            addOrRemoveBill={this.addOrRemoveBill}
            bills={this.specificBills(false)}
          />
        )
      default:
        return null
    }
  }

  addOrRemoveBill = (id, data) => {
    API.updateBill(id, data)
      .then(updatedBill =>
        this.setState({
          bills: this.state.bills.map(bill =>
            bill.id === updatedBill.id ? { ...updatedBill, isBill: data } : bill
          )
        })
      )
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { page } = this.state
    const pageCondition = page === "Bills" ? "Potential Bills" : "Bills"

    return (
      <>
        <Title title={page} />

        <TabsButton
          input={`View ${pageCondition}`}
          clickHandler={() => this.setPage(pageCondition)}
        />

        {this.renderComponents()}
      </>
    )
  }
}
