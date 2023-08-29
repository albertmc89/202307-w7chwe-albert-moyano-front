import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, gitHubProvider } from "../../firebase";
import "./LoginPage.css";

const LoginPage = () => {
  const [user] = useAuthState(auth);

  const login = async () => {
    await signInWithPopup(auth, gitHubProvider);
  };

  return (
    <main className="login-page">
      <div className="robots-title">
        {!user && (
          <>
            <div className="log-in-container">
              <span>Log in to your account</span>
              <button className="button sign-in" onClick={login}>
                Sign in
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default LoginPage;
