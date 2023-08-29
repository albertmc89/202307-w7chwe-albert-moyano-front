import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the links 'Home' and 'Robot creator'", () => {
      const navHome = "Home";
      const navCreate = "Robot creator";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>,
      );

      const navLinkHome = screen.getByRole("link", { name: navHome });
      const navLinkCreate = screen.getByRole("link", { name: navCreate });

      expect(navLinkHome).toBeInTheDocument();
      expect(navLinkCreate).toBeInTheDocument();
    });
  });
});
