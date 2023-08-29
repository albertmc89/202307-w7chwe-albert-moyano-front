import { PropsWithChildren } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

const ProtectedRoute = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [user, isLoading] = useAuthState(auth);

  if (!user && isLoading) {
    return <Navigate to="/home" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
