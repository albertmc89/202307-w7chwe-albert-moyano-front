import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = (): React.ReactElement => {
  const [user] = useAuthState(auth);

  const logout = async () => {
    await signOut(auth);
  };

  if (!user) {
    <Navigate to="/login-page" />;
  }

  return (
    <header className="header">
      <div className="ko">
        <div className="title-container">
          <h1 className="header-title">RoboMate</h1>
        </div>
        <div className="sign-container">
          {user && (
            <>
              <button className="button sign-out" onClick={logout}>
                Log out
              </button>
            </>
          )}
        </div>
      </div>
      {user && <Navigation />}
    </header>
  );
};

export default Header;
