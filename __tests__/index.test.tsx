import Home from "@/app/page";
import { fireEvent, render } from "@testing-library/react";
import "jest-canvas-mock";

describe("Home Component", () => {
  it('should add a node when "Add Node" button is clicked', () => {
    const { getByText } = render(<Home />);
    const addButton = getByText("Add Node");

    fireEvent.click(addButton);

    // Todo: Add assertion
  });

  it('should add an edge between nodes when "Add Edge" button is clicked', () => {
    const { getByLabelText, getByText } = render(<Home />);
    const fromNodeInput = getByLabelText("From Node:");
    const toNodeInput = getByLabelText("To Node:");
    const addEdgeButton = getByText("Add Edge");

    // Simulate user input
    fireEvent.change(fromNodeInput, { target: { value: "0" } });
    fireEvent.change(toNodeInput, { target: { value: "1" } });

    fireEvent.click(addEdgeButton);

    // Todo: Add assertion
  });
});
