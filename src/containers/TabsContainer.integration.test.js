import { render, getByText, fireEvent } from "@testing-library/react"
import React from "react"
import TabsContainer from "./TabsContainer"

it("shows Bills as default tab", () => {
  const { container } = render(<TabsContainer />)
  const titleContainer = container.querySelector("h1")

  expect(getByText(titleContainer, "Bills")).toBeInTheDocument()
})

it("can change tabs", () => {
  const { container } = render(<TabsContainer />)

  const nextTabButton = getByText(container, "View Potential Bills")
  fireEvent.click(nextTabButton)

  const titleContainer = container.querySelector("h1")

  expect(getByText(titleContainer, "Potential Bills")).toBeInTheDocument()
})
