import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import PaginationManger from "./PaginationManager";
import { BrowserRouter } from "react-router-dom";

describe("<Home />", () => {
  test("should prev and first option be disabled if prev param is empty", async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <PaginationManger
          endpoint="https://endpoint.com"
          pageNumber={1}
          prev={""}
          next={"https://endpoint.com?page=2"}
          lastPage={30}
        />
      </BrowserRouter>
    );
    const firstPage = getByTestId("first-page");
    const prevPage = getByTestId("prev-page");
    const lastPage = getByTestId("last-page");
    const nextPage = getByTestId("next-page");
    expect(firstPage).toHaveClass("disabled");
    expect(prevPage).toHaveClass("disabled");
    expect(lastPage).not.toHaveClass("disabled");
    expect(nextPage).not.toHaveClass("disabled");
  });

  test("should prev and first option be disabled if prev param is empty", async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <PaginationManger
          endpoint="https://endpoint.com"
          pageNumber={2}
          prev={"https://endpoint.com?page=1"}
          next={""}
          lastPage={30}
        />
      </BrowserRouter>
    );
    const firstPage = getByTestId("first-page");
    const prevPage = getByTestId("prev-page");
    const lastPage = getByTestId("last-page");
    const nextPage = getByTestId("next-page");
    expect(firstPage).not.toHaveClass("disabled");
    expect(prevPage).not.toHaveClass("disabled");
    expect(lastPage).toHaveClass("disabled");
    expect(nextPage).toHaveClass("disabled");
  });
});
