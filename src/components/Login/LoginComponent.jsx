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
    onSuccess: (tokenResponse) => handleLoginSuccess(tokenResponse),
    onError: () => console.log("Login Failed"),
    flow: "auth-code", // 추가: auth code flow 사용
    redirectUri: "https://yes1sir.vercel.app/oauth/callback", // 콜백 경로 설정
  });

  const handleLoginSuccess = async (tokenResponse) => {
    console.log("Token response:", tokenResponse);
    const { access_token } = tokenResponse;
    if (!access_token) {
      console.error("Access token is undefined");
      return;
    }
    try {
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
