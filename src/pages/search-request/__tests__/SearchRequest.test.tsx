import * as React from "react";
import userEvent from "@testing-library/user-event";
import { screen, render, waitFor, fireEvent } from "../../../utils/test";
import SearchRequest from "../SearchRequest";

describe("<SearchRequest /> test suite", () => {
  it("should render the page without any words in the inspection list", () => {
    render(<SearchRequest />);

    expect(screen.getByText(/Palavra de Inspeção/i)).toBeInTheDocument();
    expect(screen.getByText(/procurar/i)).toBeInTheDocument();
    expect(screen.getByText(/sua lista de palavras/i)).toBeInTheDocument();
  });
  it("should render the page with two words in the inspection list", () => {
    render(<SearchRequest />, [
      { id: "1", value: "teste" },
      { id: "2", value: "banana" },
    ]);

    expect(screen.getByText(/Palavra de Inspeção/i)).toBeInTheDocument();
    expect(screen.getByText(/procurar/i)).toBeInTheDocument();
    expect(screen.getByText(/sua lista de palavras/i)).toBeInTheDocument();
    expect(screen.getByText(/teste/i)).toBeInTheDocument();
    expect(screen.getByText(/banana/i)).toBeInTheDocument();
  });
  it("should add word to the inspection list with the inspection form", async () => {
    render(<SearchRequest />);

    fireEvent.change(screen.getByLabelText(/Palavra de inspeção/i), {
      target: { value: "security" },
    });
    userEvent.click(screen.getByText(/^procurar$/i));

    await waitFor(
      () => {
        expect(screen.getByText(/Palavra de Inspeção/i)).toBeInTheDocument();
        expect(screen.getByText(/^procurar$/i)).toBeInTheDocument();
        expect(screen.getByText(/sua lista de palavras/i)).toBeInTheDocument();
        expect(screen.getByText(/security/i)).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  });
});
