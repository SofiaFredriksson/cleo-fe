import React from "react"

import BillContainer from "./BillContainer"

export default function BillsContainer({ bills, addOrRemoveBill }) {
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
  )
}
