import { fireEvent, render, screen } from "@testing-library/react";
import CreateIntervalModal from "src/components/containers/Watering/CreateIntervalModal";
import "@testing-library/jest-dom";

class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
    }

describe("CreateIntervalModal", () => {
    window.ResizeObserver = ResizeObserver;
    const onClose = jest.fn()
    const onAdd = jest.fn()

    it("Renders without crashing", () => {
        
       render(<CreateIntervalModal open={true} onClose={onClose} onAdd={onAdd} />)
    
    })

    it("Displays turned off button", () => {
        render(<CreateIntervalModal open={true} onClose={onClose} onAdd={onAdd} />)
        const buttonToFind = screen.getByText('Confirm', { selector: 'button' })
        expect(buttonToFind).toBeDisabled()
    })
    it("Makes the button clickable on setting day",()=>{
        render(<CreateIntervalModal open={true} onClose={onClose} onAdd={onAdd} />)
        const dayButton = screen.getByTestId("Monday-switch")
        fireEvent.click(dayButton)
        const buttonToFind = screen.getByText('Confirm', { selector: 'button' })
        expect(buttonToFind).not.toBeDisabled()
    })
})