import React, { Component } from "react";

import BillContainer from "./BillContainer";

export default class BillsContainer extends Component {
  render() {
    const { bills, addOrRemoveBill } = this.props;

    return (
      <>
        {bills.map(bill => (
          <BillContainer
            addOrRemoveBill={addOrRemoveBill}
            key={bill.id}
            bill={bill}
          />
        ))}
      </>
    );
  }
}
