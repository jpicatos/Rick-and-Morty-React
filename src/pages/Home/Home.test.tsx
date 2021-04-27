import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

describe("<Home />", () => {
  test("should display the menu", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const menu = screen.getByTestId("menu");
    expect(menu).toBeInTheDocument();
  });

  test("should menu home to be actve", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const home = screen.getByText("Home");
    expect(home).toHaveClass("disabled");
  });

  test("should display the react icon", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
  });
});
