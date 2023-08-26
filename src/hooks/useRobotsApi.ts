import axios from "axios";
import { useCallback } from "react";
import { ApiRobot, Robot } from "../types";

const useRobotsApi = () => {
  const apiUrl = import.meta.env.VITE_API_ROBOTS_URL;

  const getRobot = useCallback(async (): Promise<Robot[]> => {
    try {
      const { data: apiRobots } = await axios.get<ApiRobot[]>(
        `${apiUrl}robots`,
      );

      const robots = apiRobots.map<Robot>(
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

  return { getRobot };
};

export default useRobotsApi;
