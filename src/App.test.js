import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

test("renders App without crashing", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
});

test("/ route", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText("Vending Machine")).toBeInTheDocument();
});

test("Backlink", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText("Vending Machine")).toBeInTheDocument();
  const navLink = screen.getAllByText("Candy Bar")[0];
  fireEvent.click(navLink);
  expect(screen.getByText("Candy Bar")).toBeInTheDocument();
  const backLink = screen.getByText("Back");
  fireEvent.click(backLink);
  expect(screen.getByText("Vending Machine")).toBeInTheDocument();
});

describe("Testing NavBar links", () => {
  test("/candybar", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Vending Machine")).toBeInTheDocument();
    const navLink = screen.getAllByText("Candy Bar")[0];
    fireEvent.click(navLink);
    expect(screen.getByText("Candy Bar")).toBeInTheDocument();
  });

  test("/chips", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Vending Machine")).toBeInTheDocument();
    const navLink = screen.getAllByText("Chips")[0];
    fireEvent.click(navLink);
    expect(screen.getByText("Chips")).toBeInTheDocument();
  });

  test("/icedtea", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Vending Machine")).toBeInTheDocument();
    const navLink = screen.getAllByText("Iced Tea")[0];
    fireEvent.click(navLink);
    expect(screen.getByText("Iced Tea")).toBeInTheDocument();
  });
});

describe("Testing Snack Sidebar links", () => {
  test("/candybar", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Vending Machine")).toBeInTheDocument();
    const navLink = screen.getAllByText("Candy Bar")[1];
    fireEvent.click(navLink);
    expect(screen.getByText("Candy Bar")).toBeInTheDocument();
  });

  test("/chips", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Vending Machine")).toBeInTheDocument();
    const navLink = screen.getAllByText("Chips")[1];
    fireEvent.click(navLink);
    expect(screen.getByText("Chips")).toBeInTheDocument();
  });

  test("/icedtea", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Vending Machine")).toBeInTheDocument();
    const navLink = screen.getAllByText("Iced Tea")[1];
    fireEvent.click(navLink);
    expect(screen.getByText("Iced Tea")).toBeInTheDocument();
  });
});
