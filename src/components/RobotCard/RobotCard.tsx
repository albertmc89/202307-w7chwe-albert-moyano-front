import React from "react";
import { Robot } from "../../types";
import "./RobotCard.css";

interface RobotCardProps {
  robot: Partial<Robot>;
}

const RobotCard = ({
  robot: { name, image, speed, endurance },
}: RobotCardProps): React.ReactElement => {
  return (
    <article className="robot">
      <div className="robot__container">
        <img
          className="robot__picture"
          src={`${image}`}
          alt={`Close-up of ${name}`}
        />
      </div>
      <div className="robot__data-container">
        <h2 className="robot__name">{name}</h2>
        <ul className="robot__data-list">
          <li className="robot__data">
            <span className="robot__data-label">Speed: </span>
            {speed}
          </li>
          <li className="robot__data">
            <span className="robot__data-label">Endurance: </span> {endurance}
          </li>
        </ul>
      </div>
    </article>
  );
};

export default RobotCard;
