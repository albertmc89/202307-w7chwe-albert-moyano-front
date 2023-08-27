import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockRobots } from "../../mocks/robotsMock";
import { setupStore } from "../../store";
import RobotsListPage from "./RobotsListPage";

describe("Given a RobotsListPage page", () => {
  describe("When is rendered", () => {
    test("Then it should show a heading with the text 'The Robots'", () => {
      const headerText = "The Robots";
      const store = setupStore({
        robotsState: {
          robots: mockRobots,
        },
      });

      render(
        <Provider store={store}>
          <RobotsListPage />
        </Provider>,
      );

      const heading = screen.getByRole("heading", { name: headerText });

      expect(heading).toBeInTheDocument();
    });
  });
});
