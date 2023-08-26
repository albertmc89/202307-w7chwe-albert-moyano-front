import { renderHook } from "@testing-library/react";
import { mockRobots } from "../mocks/robotsMock";
import { server } from "../mocks/server";
import { errorHandlers } from "./handlers";
import useRobotsApi from "./useRobotsApi";

describe("Given function getRobot from useRobotsApi custom hook", () => {
  describe("When the function is called", () => {
    test("Then you will recieve a list of robots", async () => {
      const { result } = renderHook(() => useRobotsApi());
      const { getRobot } = result.current;

      const robots = await getRobot();

      expect(robots).toStrictEqual(mockRobots);
    });
  });

  describe("When the function is called and can't get the data from the Api", () => {
    test("Then it should get an error 'Can't get any robot'", async () => {
      server.resetHandlers(...errorHandlers);

      const expectedError = new Error("Can't get any robot");
      const { result } = renderHook(() => useRobotsApi());
      const { getRobot } = result.current;

      const error = getRobot();

      expect(error).rejects.toThrowError(expectedError);
    });
  });
});
