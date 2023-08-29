import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = (): React.ReactElement => {
  return (
    <>
      <ul className="navigation-list">
        <li>
          <NavLink className="navigation-list__link" to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navigation-list__link" to="/create-robot">
            Robot creator
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
