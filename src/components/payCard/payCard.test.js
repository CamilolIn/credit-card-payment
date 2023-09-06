import React from "react"
import "@testing-library/jest-dom/extend-expect"
import {render} from "@testing-library/react"
import PayCard from "./index"

test("Render content whit title", ()=> {
    const component = render(<PayCard />)

    component.getByText("Place Order")
})