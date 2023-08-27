import { mockRobots } from "../../mocks/robotsMock";
import { RobotState } from "../types";
import {
  addRobotActionCreator,
  loadRobotsActionCreator,
  robotsReducer,
} from "./robotsSlice";

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

  describe("When it receives a state with one user and addRobot action", () => {
    test("Then it should return a new state with the robot with id 11 added", () => {
      const currentRobotsState: RobotState = {
        robots: mockRobots,
      };

      const robotCreated = {
        id: "11",
        name: "Benito Camelas",
        speed: 2,
        endurance: 10,
        image: "",
      };

      const addRobotAction = addRobotActionCreator(robotCreated);

      const newUserState = robotsReducer(currentRobotsState, addRobotAction);

      expect(newUserState.robots).toContain(robotCreated);
      expect(newUserState.robots).toHaveLength(
        currentRobotsState.robots.length + 1,
      );
    });
  });
});
