import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../../ProtectedRoute/ProtectedRoute";
import LoginPage from "../../pages/LoginPage/LoginPage";
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
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <RobotsListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Navigate to="/home" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-robot"
            element={
              <ProtectedRoute>
                <NewRobotPage />
              </ProtectedRoute>
            }
          />
          <Route path={"login-page"} element={<LoginPage />} />
        </Routes>
      </main>
      {isLoading && <Loading />}
    </div>
  );
};

export default App;
