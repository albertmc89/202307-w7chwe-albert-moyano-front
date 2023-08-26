import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import RobotsList from "../RobotsList/RobotsList";

const App = (): React.ReactElement => {
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
