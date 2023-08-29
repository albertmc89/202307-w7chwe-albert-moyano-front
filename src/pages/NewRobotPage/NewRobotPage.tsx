import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import NewRobotForm from "../../components/NewRobotForm/NewRobotForm";
import { auth } from "../../firebase";
import LoginPage from "../LoginPage/LoginPage";
import "./NewRobotPage.css";

const NewRobotPage = () => {
  const [user] = useAuthState(auth);

  if (!user) {
    <Navigate to="/home" />;
  }

  return (
    <>
      {!user && <Navigate to="/home" />}
      <LoginPage />
      {user && (
        <section className="section">
          <div className="section-title">
            <h2>Robot creator</h2>
          </div>
        </section>
      )}
      {user && <NewRobotForm />}
    </>
  );
};

export default NewRobotPage;
