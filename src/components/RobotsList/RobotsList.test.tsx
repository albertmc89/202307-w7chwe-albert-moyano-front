import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockRobots } from "../../mocks/robotsMock";
import { setupStore } from "../../store";
import RobotsList from "./RobotsList";

describe("Given a RobotsList component", () => {
  describe("When it's rendered 'Chronodroid', 'QuantaBot', 'ElectraSphere'", () => {
    test("Then it should show the names 'Chronodroid', 'QuantaBot', 'ElectraSphere' and 'Maximus' as heading", () => {
      const store = setupStore({ robotsState: { robots: mockRobots } });

      render(
        <Provider store={store}>
          <RobotsList />
        </Provider>,
      );

      mockRobots.forEach((robot) => {
        const expectedHeading = screen.getByRole("heading", {
          name: robot.name,
        });

        expect(expectedHeading).toBeInTheDocument();
      });
    });
  });
});
