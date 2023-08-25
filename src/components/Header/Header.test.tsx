import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'RoboMate' title inside a heading", () => {
      const titleExpected = "RoboMate";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );

      const headingTitle = screen.getByRole("heading", {
        name: titleExpected,
      });

      expect(headingTitle).toBeInTheDocument();
    });
  });
});
