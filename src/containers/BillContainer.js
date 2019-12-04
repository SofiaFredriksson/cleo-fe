import React, { Component } from "react";
import Bill from "../components/Bill";
import Transaction from "../components/Transaction";
import Button from "../components/Button";
import "./BillContainer.scss";

export default class BillContainer extends Component {
  state = {
    clicked: false
  };

  clickedCondition = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };
  render() {
    const { bill, addOrRemoveBill } = this.props;
    return (
      <div className="bill-container">
        <>
          <Bill {...bill} handleClick={this.clickedCondition} />

          <Button
            clickHandler={() =>
              addOrRemoveBill(bill.id, bill.isBill ? false : true)
            }
            input={bill.isBill ? "Remove Bill" : "Add as Bill"}
          />
        </>
        {this.state.clicked
          ? bill.transactions.map(transaction => (
              <Transaction key={transaction.id} {...transaction} />
            ))
          : null}
      </div>
    );
  }
}
