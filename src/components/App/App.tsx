import { Navigate, Route, Routes } from "react-router-dom";
import NewRobotPage from "../../pages/NewRobotPage/NewRobotPage";
import RobotsListPage from "../../pages/RobotsListPage/RobotsListPage";
import { useAppSelector } from "../../store";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import "./App.css";

const App = (): React.ReactElement => {
  const isLoading = useAppSelector((state) => state.uiState.isLoading);

  return (
    <div className="container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/home" element={<RobotsListPage />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/createrobot" element={<NewRobotPage />} />
        </Routes>
      </main>
      {isLoading && <Loading />}
    </div>
  );
};

export default App;
