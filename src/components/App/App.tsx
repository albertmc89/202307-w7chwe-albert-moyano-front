import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import useRobotsApi from "../../hooks/useRobotsApi";
import { useAppDispatch } from "../../store";
import { loadRobotsActionCreator } from "../../store/robots/robotsSlice";
import Header from "../Header/Header";
import RobotsList from "../RobotsList/RobotsList";
import "./App.css";

const App = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getRobots } = useRobotsApi();

  useEffect(() => {
    (async () => {
      const robots = await getRobots();

      dispatch(loadRobotsActionCreator(robots));
    })();
  }, [getRobots, dispatch]);

  return (
    <div className="container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
        <RobotsList />
      </main>
    </div>
  );
};

export default App;
