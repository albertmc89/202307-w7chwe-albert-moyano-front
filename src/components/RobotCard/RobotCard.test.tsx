import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockRobots } from "../../mocks/robotsMock";
import { store } from "../../store";
import RobotCard from "./RobotCard";

describe("Given a RobotCard component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an image with the alternate text 'Close-up of Chronodroid'", () => {
      const alternateImageText = "Close-up of Chronodroid";

      render(
        <Provider store={store}>
          <RobotCard robot={mockRobots[0]} />
        </Provider>,
      );

      const userImage = screen.getByAltText(alternateImageText);

      expect(userImage).toBeInTheDocument();
    });

    test("Then it should show the heading text 'Chronodroid'", () => {
      const headingText = "Chronodroid";

      render(
        <Provider store={store}>
          <RobotCard robot={mockRobots[0]} />
        </Provider>,
      );

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
