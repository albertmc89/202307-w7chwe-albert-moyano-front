import axios from "axios";
import { useCallback } from "react";
import { ApiRobots, Robot } from "../types";

const useRobotsApi = () => {
  const apiUrl = import.meta.env.VITE_API_ROBOTS_URL;

  const getRobots = useCallback(async (): Promise<Robot[]> => {
    try {
      const { data: apiRobots } = await axios.get<ApiRobots>(`${apiUrl}robots`);

      const apiRobotsList = apiRobots.robots;

      const robots = apiRobotsList.map<Robot>(
        ({ _id, name, image, speed, endurance }) => ({
          id: _id,
          name,
          image,
          speed,
          endurance,
        }),
      );

      return robots;
    } catch {
      throw new Error("Can't get any robot");
    }
  }, [apiUrl]);

  return { getRobots };
};

export default useRobotsApi;
