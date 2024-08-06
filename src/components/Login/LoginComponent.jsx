import { useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Backspace from "../../components/common/Backspace";
import LoginTop from "./LoginTop";
import GoogleIcon from "@/assets/svgs/google_logo.svg?react";

const LoginComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      if (!localStorage.getItem("hasCompletedAgeInfo")) {
        navigate("/age");
      } else {
        navigate("/homelogin");
      }
    }
  }, [navigate]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => handleLoginSuccess(codeResponse),
    onError: () => console.log("Login Failed"),
    flow: "auth-code",
    redirectUri: "https://yes1sir.vercel.app/oauth/callback",
  });

  const handleLoginSuccess = async (codeResponse) => {
    console.log("Code response:", codeResponse);

    const { code } = codeResponse;
    if (!code) {
      console.error("Authorization code is undefined");
      return;
    }

    try {
      const tokenResponse = await axios.post(
        "https://oauth2.googleapis.com/token",
        {
          code,
          client_id: import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID,
          redirect_uri: "https://yes1sir.vercel.app/oauth/callback",
          grant_type: "authorization_code",
          code_verifier: codeResponse.codeVerifier, // 자동 생성된 code_verifier 사용
        }
      );

      const { access_token } = tokenResponse.data;
      if (!access_token) {
        console.error("Access token is undefined");
        return;
      }

      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${access_token}` } }
      );

      console.log("User info:", userInfo);

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userId", userInfo.data.sub);
      localStorage.setItem("userName", userInfo.data.name);

      if (!localStorage.getItem("hasCompletedAgeInfo")) {
        navigate("/age");
      } else {
        navigate("/homelogin");
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  return (
    <LoginWrapper>
      <Backspace />
      <LoginTop />
      <LoginBottom>
        <Logindescription>로그인</Logindescription>
        <LoginBtn onClick={() => login()}>
          <GoogleIcon />
          <LoginBtnContent>Google로 로그인</LoginBtnContent>
        </LoginBtn>
      </LoginBottom>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 144rem;
  height: 102.4rem;

  background-color: ${({ theme }) => theme.colors.b01};
  color: ${({ theme }) => theme.colors.w01};
`;

const LoginBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.9rem;
`;

const Logindescription = styled.div`
  ${({ theme }) => theme.fonts.M3_headline_large}
`;

const LoginBtn = styled.div`
  display: flex;
  width: 542px;
  padding: 15px 15px 15px 168px;
  align-items: flex-start;
  gap: 15px;

  border-radius: 10px;
  background: #fff;
  box-shadow:
    0px 0px 3px rgba(0, 0, 0, 0.08),
    0px 2px 3px rgba(0, 0, 0, 0.17);
  cursor: pointer;
`;

const LoginBtnContent = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-family: Roboto;
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
`;

export default LoginComponent;
