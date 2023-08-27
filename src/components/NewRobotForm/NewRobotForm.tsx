import { useState } from "react";
import { useDispatch } from "react-redux";
import useRobotsApi from "../../hooks/useRobotsApi";
import { addRobotActionCreator } from "../../store/robots/robotsSlice";
import { Robot } from "../../types";
import "./NewRobotForm.css";

const NewRobotForm = () => {
  const dispatch = useDispatch();

  const { addRobotApi } = useRobotsApi();

  const [newRobot, setNewRobot] = useState<Omit<Robot, "id">>({
    name: "",
    image: "",
    speed: 0,
    endurance: 0,
  });

  const changeNewUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewRobot({
      ...newRobot,
      [event.target.id]: event.target.value,
    });
  };

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const robot = await addRobotApi(newRobot);

    dispatch(addRobotActionCreator(robot));
  };

  return (
    <form className="form" onSubmit={submitForm}>
      <div className="from-control">
        <label htmlFor="name" className="form__label">
          Robot name:
        </label>
        <input
          type="text"
          id="name"
          value={newRobot.name}
          className="form__input"
          onChange={changeNewUser}
        />
      </div>
      <div className="from-control">
        <label htmlFor="speed" className="form__label">
          Speed (0 - 10):
        </label>
        <input
          type="number"
          min="1"
          max="10"
          id="speed"
          value={newRobot.speed === 0 ? "" : newRobot.speed}
          className="form__input"
          onChange={changeNewUser}
        />
      </div>
      <div className="from-control">
        <label htmlFor="endurance" className="form__label">
          Endurance (0 - 10):
        </label>
        <input
          type="number"
          min="1"
          max="10"
          id="endurance"
          value={newRobot.endurance === 0 ? "" : newRobot.endurance}
          className="form__input"
          onChange={changeNewUser}
        />
      </div>
      <div className="from-control">
        <label htmlFor="image" className="form__label">
          Image:
        </label>
        <input
          type="text"
          id="image"
          value={newRobot.image}
          className="form__input"
          onChange={changeNewUser}
        />
      </div>
      <div className="form__button-container">
        <button type="submit" className="button form__button">
          Create robot
        </button>
      </div>
    </form>
  );
};

export default NewRobotForm;
