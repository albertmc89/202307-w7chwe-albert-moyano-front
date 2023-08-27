import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  startLoadingActionCreator,
  stopLoadingActionCreator,
} from "../store/ui/uiSlice";
import { ApiRobots, Robot } from "../types";

const useRobotsApi = () => {
  const apiUrl = import.meta.env.VITE_API_ROBOTS_URL;
  const dispatch = useDispatch();

  const getRobots = useCallback(async (): Promise<Robot[]> => {
    dispatch(startLoadingActionCreator());

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
      dispatch(stopLoadingActionCreator());

      return robots;
    } catch {
      dispatch(stopLoadingActionCreator());
      throw new Error("Can't get any robot");
    }
  }, [apiUrl, dispatch]);

  const addRobotApi = async (newRobot: Omit<Robot, "id">) => {
    try {
      const { data } = await axios.post<Robot>(`${apiUrl}robots`, newRobot);

      return data;
    } catch {
      throw new Error("Couldn't add robot");
    }
  };

  return { getRobots, addRobotApi };
};

export default useRobotsApi;
