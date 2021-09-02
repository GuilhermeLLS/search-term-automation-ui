import * as React from "react";
import { screen, render } from "../../../utils/test";
import InspectionList from "../InspectionList";

describe("<InspectionList /> test suite", () => {
  it("should render empty InspectionList", () => {
    render(<InspectionList />);

    expect(screen.getByText(/sua lista de palavras/i)).toBeInTheDocument();
  });
  it("should render InspectionList with 2 words", () => {
    render(<InspectionList />, [
      { id: "1", value: "teste" },
      { id: "2", value: "banana" },
    ]);

    expect(screen.getByText(/sua lista de palavras/i)).toBeInTheDocument();
    expect(screen.getByText(/teste/i)).toBeInTheDocument();
    expect(screen.getByText(/banana/i)).toBeInTheDocument();
  });
});
