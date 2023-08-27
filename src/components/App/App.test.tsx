import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store";
import App from "./App";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show 'RoboMate' inside a heading", () => {
      const title = "RoboMate";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>,
      );

      const headingTitle = screen.getByRole("heading", { name: title });

      expect(headingTitle).toBeInTheDocument();
    });
  });
});
