import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginComponent from "../../components/Login/LoginComponent";

const Login = () => {
  const clientId = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <LoginComponent />
    </GoogleOAuthProvider>
  );
};

export default Login;
