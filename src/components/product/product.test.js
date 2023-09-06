import React from "react"
import "@testing-library/jest-dom/extend-expect"
import {render} from "@testing-library/react"
import Product from "./index"

test("Render content whit title", ()=> {
    let props = {
        name:"TV",
    }
    const component = render(<Product product={props}/>)

    // component.getByText("TV")
})