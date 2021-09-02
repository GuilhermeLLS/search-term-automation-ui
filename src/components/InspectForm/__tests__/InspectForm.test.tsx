import * as React from "react";
import userEvent from "@testing-library/user-event";
import { screen, render, waitFor, fireEvent } from "../../../utils/test";
import InspectForm from "../InspectForm";

describe("<InspectForm /> test suite", () => {
  it("should render the base state form", () => {
    render(<InspectForm />);

    expect(screen.getByText(/Palavra de Inspeção/i)).toBeInTheDocument();
    expect(screen.getByText(/procurar/i)).toBeInTheDocument();
  });
  it("should render the field required error", async () => {
    render(<InspectForm />);

    userEvent.click(screen.getByText(/^procurar$/i));
    await waitFor(() => {
      expect(screen.getByText(/Palavra de Inspeção/i)).toBeInTheDocument();
      expect(screen.getByText(/^procurar$/i)).toBeInTheDocument();
      expect(screen.getByText(/Campo Obrigatório\*/i)).toBeInTheDocument();
    });
  });
  it("should render the minLegth form error", async () => {
    render(<InspectForm />);

    fireEvent.change(screen.getByLabelText(/Palavra de inspeção/i), {
      target: { value: "aa" },
    });

    userEvent.click(screen.getByText(/^procurar$/i));
    await waitFor(() => {
      expect(screen.getByText(/Palavra de Inspeção/i)).toBeInTheDocument();
      expect(screen.getByText(/^procurar$/i)).toBeInTheDocument();
      expect(screen.getByText(/Tamanho minimo de 4 caracteres\*/i)).toBeInTheDocument();
    });
  });

  it("should render the value form error", async () => {
    render(<InspectForm />);

    fireEvent.change(screen.getByLabelText(/Palavra de inspeção/i), {
      target: { value: "security" },
    });
    userEvent.click(screen.getByText(/^procurar$/i));

    await waitFor(
      () => {
        userEvent.type(screen.getByLabelText(/Palavra de inspeção/i), "security");
        userEvent.click(screen.getByText(/^procurar$/i));
      },
      { timeout: 2000 }
    );

    await waitFor(
      () => {
        expect(screen.getByText(/Palavra de Inspeção/i)).toBeInTheDocument();
        expect(screen.getByText(/^procurar$/i)).toBeInTheDocument();
        expect(screen.getByText(/Palavra já existe na lista!/i)).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  });

  it("should add word with the inspection form", async () => {
    render(<InspectForm />);

    fireEvent.change(screen.getByLabelText(/Palavra de inspeção/i), {
      target: { value: "security" },
    });
    userEvent.click(screen.getByText(/^procurar$/i));

    await waitFor(() => {
      expect(screen.getByText(/^carregando$/i)).toBeInTheDocument();
    });
    await waitFor(
      () => {
        expect(screen.getByText(/^procurar$/i)).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
    expect(screen.getByText(/Palavra de Inspeção/i)).toBeInTheDocument();
  });
});
