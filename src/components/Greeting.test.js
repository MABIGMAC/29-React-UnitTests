import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {
    test("Greeting has hello world", () => {
        // Arrange
        render(<Greeting />);
        // Act
        // Assert
        const helloworld = screen.getByText("Hello World", { exact: false });
        expect(helloworld).toBeInTheDocument();
        // expect(helloworld).not.toBeInTheDocument()
    });
    test("Button not clicked",()=>{
        render(<Greeting/>)
        const helloworld = screen.getByText("Jello", { exact: false });
        expect(helloworld).toBeInTheDocument();
    })
    test("Button clicked",()=>{
        render(<Greeting/>)
        const buttonElem = screen.getByRole('button')
        userEvent.click(buttonElem)
        const helloworld = screen.getByText("Nice to see you", { exact: false });
        expect(helloworld).toBeInTheDocument();
    })
});
