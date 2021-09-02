import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import Theme from "../styles/theme";
import { BrowserRouter } from "react-router-dom";
import { Word, WordsContextProvider } from "../contexts/WordsContext/WordsContext";

function AllTheProviders({
  children,
  providerState,
}: {
  children?: React.ReactNode;
  providerState?: Word[];
}) {
  return (
    <Theme>
      <WordsContextProvider initialState={providerState}>
        <BrowserRouter>{children}</BrowserRouter>
      </WordsContextProvider>
    </Theme>
  );
}

function customRender(
  ui: React.ReactElement,
  providerState?: Word[],
  options?: Omit<RenderOptions, "wrapper">
) {
  return render(<AllTheProviders providerState={providerState}>{ui}</AllTheProviders>, {
    ...options,
  });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
