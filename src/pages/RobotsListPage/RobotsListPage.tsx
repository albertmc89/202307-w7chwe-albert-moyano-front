import { useEffect } from "react";
import RobotsList from "../../components/RobotsList/RobotsList";
import useRobotsApi from "../../hooks/useRobotsApi";
import { useAppDispatch } from "../../store";
import { loadRobotsActionCreator } from "../../store/robots/robotsSlice";
import "./RobotsListPage.css";

const RobotsListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getRobots } = useRobotsApi();

  useEffect(() => {
    (async () => {
      const robots = await getRobots();

      dispatch(loadRobotsActionCreator(robots));
    })();
  }, [getRobots, dispatch]);

  return (
    <>
      <section className="robotslist-page">
        <div className="robots-title">
          <h2>The Robots</h2>
        </div>
        <RobotsList />
      </section>
    </>
  );
};

export default RobotsListPage;
