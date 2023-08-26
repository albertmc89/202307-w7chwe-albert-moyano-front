import { useAppSelector } from "../../store";
import "./RobotsList.css";

const RobotsList = (): React.ReactElement => {
  const robots = useAppSelector((state) => state.robotsState.robots);

  return (
    <>
      <div className="robots-title">
        <h2>The Robots</h2>
      </div>
      <ul className="robots-list">
        {robots.map((robot) => (
          <li key={robot.id}></li>
        ))}
      </ul>
    </>
  );
};

export default RobotsList;
