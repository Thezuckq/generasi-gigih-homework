import React from "react";
import { render, screen } from "@testing-library/react";
import SearchForm from "./index";
import userEvent from "@testing-library/user-event";

test("Can rendered / display input form", () => {
  render(<SearchForm />);

  const searchForm = screen.getByTestId("search_form");

  expect(searchForm).toBeInTheDocument();
});

test("valid type submit and value", () => {
  render(<SearchForm handleSubmit={() => console.log("form has been submit")} />);

  const searchForm = screen.getByTestId("search_form");
  const consoleSpy = jest.spyOn(console, "log");

  userEvent.type(searchForm, "Calvin{enter}");

  expect(searchForm).toHaveValue("Calvin");
  expect(consoleSpy).toHaveBeenCalledWith("form has been submit");
});