import React from "react"
import "@testing-library/jest-dom/extend-expect"
import {render} from "@testing-library/react"
import DeliveryCard from "./index"

test("Render content whit title", ()=> {
    let props = {
        deliveryNumber:1,
        deliveryTitle:"Delivery Info"
    }
    const component = render(<DeliveryCard  
        deliveryNumber={props.deliveryNumber} 
        deliveryTitle={props.deliveryTitle}
    />)

    component.getByText("Delivery Info")
})

test("Render content whitout title", ()=> {
    let props = {
        deliveryNumber:1,
    }
    const component = render(<DeliveryCard  
        deliveryNumber={props.deliveryNumber} 
        deliveryTitle={props.deliveryTitle}
    />)

    component.getByText("No Title")
})

test("Render content whit number delivery", ()=> {
    let props = {
        deliveryNumber:1,
    }
    const component = render(<DeliveryCard  
        deliveryNumber={props.deliveryNumber} 
        deliveryTitle={props.deliveryTitle}
    />)
})