import * as React from "react";
import { MemoryRouter, Route } from "react-router-dom";
import { screen, render, waitFor } from "../../../utils/test";
import Details from "../Details";

const mockedUrls = [
  "http://testing.com/a",
  "http://testing.com/b",
  "http://testing.com/c",
  "http://testing.com/d",
];

describe("<Details /> test suite", () => {
  it("should render the details page for banana word", async () => {
    const route = "/details/banana/2";
    render(
      <MemoryRouter initialEntries={[route]}>
        <Route path="/details/:word/:id">
          <Details />
        </Route>
      </MemoryRouter>,
      [{ id: "2", value: "banana" }]
    );

    expect(screen.getByText(/Detalhes da palavra/i)).toBeInTheDocument();
    expect(screen.getByText(/banana/i)).toBeInTheDocument();
    expect(screen.getByText(/<- Voltar para página inicial/i)).toBeInTheDocument();
    expect(screen.getByText(/carregando id\.\.\./i)).toBeInTheDocument();
    expect(screen.getByText(/carregando status\.\.\./i)).toBeInTheDocument();
    expect(screen.getByText(/carregando urls\.\.\./i)).toBeInTheDocument();
    await waitFor(
      () => {
        expect(screen.getByText(/^2$/i)).toBeInTheDocument();
        mockedUrls.forEach((url) => expect(screen.getByText(url)).toBeInTheDocument());
      },
      { timeout: 2000 }
    );
  });
});
