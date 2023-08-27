import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import NewRobotPage from "./NewRobotPage";

describe("Given a NewRobotPage", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Robot creator' as heading", () => {
      const expectedHeadingText = "Robot creator";

      render(
        <Provider store={store}>
          <NewRobotPage />
        </Provider>,
      );

      const textHeading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(textHeading).toBeInTheDocument();
    });
  });
});
