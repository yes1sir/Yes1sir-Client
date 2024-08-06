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
    onError: () => console.log("로그인 실패"),
    flow: "auth-code",
  });

  const handleLoginSuccess = async (codeResponse) => {
    console.log("로그인 응답:", codeResponse);

    const { code } = codeResponse;
    if (!code) {
      console.error("인증 코드가 정의되지 않았습니다");
      return;
    }

    try {
      // 인증 코드를 액세스 토큰으로 교환
      const tokens = await exchangeCodeForTokens(code);

      // 액세스 토큰으로 사용자 정보 가져오기
      const userInfo = await getUserInfo(tokens.access_token);

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userId", userInfo.sub);
      localStorage.setItem("userName", userInfo.name);

      if (!localStorage.getItem("hasCompletedAgeInfo")) {
        navigate("/age");
      } else {
        navigate("/homelogin");
      }
    } catch (error) {
      console.error("로그인 프로세스 오류:", error);
      navigate("/login");
    }
  };

  const exchangeCodeForTokens = async (code) => {
    const response = await axios.post("https://oauth2.googleapis.com/token", {
      code,
      client_id: import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID,
      redirect_uri: window.location.origin,
      grant_type: "authorization_code",
    });
    return response.data;
  };

  const getUserInfo = async (access_token) => {
    const response = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    );
    return response.data;
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
