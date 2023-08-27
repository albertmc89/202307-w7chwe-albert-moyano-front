import { Navigate, Route, Routes } from "react-router-dom";
import RobotsListPage from "../../pages/RobotsListPage/RobotsListPage";
import Header from "../Header/Header";
import NewRobotForm from "../NewRobotForm/NewRobotForm";
import "./App.css";

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <Header />
      <main className="main-content">
        <NewRobotForm />
        <Routes>
          <Route path="/home" element={<RobotsListPage />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
