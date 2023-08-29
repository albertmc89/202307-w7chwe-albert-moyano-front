import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import RobotsList from "../../components/RobotsList/RobotsList";
import { auth } from "../../firebase";
import useRobotsApi from "../../hooks/useRobotsApi";
import { useAppDispatch } from "../../store";
import { loadRobotsActionCreator } from "../../store/robots/robotsSlice";
import LoginPage from "../LoginPage/LoginPage";
import "./RobotsListPage.css";

const RobotsListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getRobots } = useRobotsApi();
  const [user] = useAuthState(auth);

  useEffect(() => {
    (async () => {
      const robots = await getRobots();

      dispatch(loadRobotsActionCreator(robots));
    })();
  }, [getRobots, dispatch]);

  return (
    <>
      <section className="robotslist-page">
        <LoginPage />
        {user && <h2>{`Welcome ${user.providerData[0].displayName}`}</h2>}
        {user && <RobotsList />}
      </section>
    </>
  );
};

export default RobotsListPage;
