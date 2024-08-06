import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const OAuthCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const code = query.get("code");

    if (code) {
      handleLoginSuccess(code);
    } else {
      console.error("No code found in query parameters");
      navigate("/login"); // 로그인 페이지로 리디렉션
    }
  }, [location, navigate]);

  const handleLoginSuccess = async (code) => {
    try {
      const tokenResponse = await axios.post(
        "https://oauth2.googleapis.com/token",
        {
          code,
          client_id: import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID,
          redirect_uri: "postmessage",
          grant_type: "authorization_code",
        }
      );

      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.data.access_token}`,
          },
        }
      );

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userId", userInfo.data.sub);
      localStorage.setItem("userName", userInfo.data.name);

      // 로그인 성공 후 age 페이지로 리디렉션
      navigate("/age");
    } catch (error) {
      console.error("Error fetching user info:", error);
      navigate("/login"); // 로그인 페이지로 리디렉션
    }
  };

  return <div>Loading...</div>;
};

export default OAuthCallback;
