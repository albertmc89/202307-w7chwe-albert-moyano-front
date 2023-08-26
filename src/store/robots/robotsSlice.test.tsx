import { mockRobots } from "../../mocks/robotsMock";
import { RobotState } from "../types";
import { loadRobotsActionCreator, robotsReducer } from "./robotsSlice";

describe("Given a robotsReducer reducer", () => {
  describe("When it receives a load robots action with two robots 'Chronodroid' and 'Quantabot'", () => {
    test("Then it should return a new state with the two received robots", () => {
      const currentRobotState: RobotState = {
        robots: [],
      };
      const robots = mockRobots;

      const loadRobotsAction = loadRobotsActionCreator(robots);

      const newRobotState = robotsReducer(currentRobotState, loadRobotsAction);

      expect(newRobotState).toHaveProperty("robots", robots);
    });
  });
});
