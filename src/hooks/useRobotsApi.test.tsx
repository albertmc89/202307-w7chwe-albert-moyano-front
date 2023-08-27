import { renderHook } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { mockRobots } from "../mocks/robotsMock";
import { server } from "../mocks/server";
import { setupStore } from "../store";
import { errorHandlers } from "./handlers";
import useRobotsApi from "./useRobotsApi";

describe("Given function getRobots from useRobotsApi custom hook", () => {
  const uiWrapper = ({ children }: PropsWithChildren): React.ReactElement => {
    const store = setupStore({ robotsState: { robots: mockRobots } });

    return <Provider store={store}>{children}</Provider>;
  };
  describe("When the function is called", () => {
    test("Then you will recieve a list of robots", async () => {
      const { result } = renderHook(() => useRobotsApi(), {
        wrapper: uiWrapper,
      });
      const { getRobots } = result.current;

      const robots = await getRobots();

      expect(robots).toStrictEqual(mockRobots);
    });
  });

  describe("When the function is called and can't get the data from the Api", () => {
    test("Then it should get an error 'Can't get any robot'", async () => {
      server.resetHandlers(...errorHandlers);

      const expectedError = new Error("Can't get any robot");
      const { result } = renderHook(() => useRobotsApi(), {
        wrapper: uiWrapper,
      });
      const { getRobots } = result.current;

      const error = getRobots();

      expect(error).rejects.toThrowError(expectedError);
    });
  });
});
