import styled from "styled-components";
import Backspace from "../../components/common/Backspace";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const clientId = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;
  const navigate = useNavigate();

  useEffect(() => {
    // 처음 렌더링 시 로그인 상태 확인
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      navigate("/homelogin");
    }
  }, [navigate]);

  const handleLoginSuccess = (credentialResponse) => {
    const decodedToken = jwtDecode(credentialResponse.credential);
    console.log(decodedToken);

    // 로그인 성공 - 로컬 스토리지에 로그인 상태 저장
    localStorage.setItem("isLoggedIn", "true");

    // 새로운 사용자인지 확인 (로컬 스토리지에 없는지 확인)
    const userId = localStorage.getItem("userId");
    if (!userId) {
      // 새로운 사용자라면 userId 저장 후 age 페이지로 이동
      localStorage.setItem("userId", decodedToken.sub);
      navigate("/age");
    } else {
      // 기존 사용자라면 homelogin 페이지로 이동
      navigate("/homelogin");
      // 그런데 이렇게 useEffect 사용해서 기존 사용자 / 새로운 사용자 구분해서 페이지 이동 강제로 시키면...
      // homelogin 페이지는 지금까지의 로직 상 test 페이지에서 값을 받아오는데 test 페이지에서 피부 타입 결과를 서버에 저장시키고 불러와야 할 것 같다
    }
  };

  return (
    <LoginWrapper>
      <Backspace />

      <LoginTop>
        <LogoWrapper>LOGO</LogoWrapper>
        <Testdescription>16가지 유형의 피부 MBTI 테스트</Testdescription>
      </LoginTop>

      <Logindescription>로그인</Logindescription>

      <LoginBtn>
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      </LoginBtn>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 102.4rem;

  background-color: ${({ theme }) => theme.colors.b01};
  color: ${({ theme }) => theme.colors.w01};
`;

const LogoWrapper = styled.div`
  ${({ theme }) => theme.fonts.M3_headline_large}
`;

const Testdescription = styled.div`
  ${({ theme }) => theme.fonts.M3_headline_large}
`;

const LoginTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.3rem;

  margin-top: 106px;
  margin-bottom: 236px;
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
    0px 0px 3px 0px rgba(0, 0, 0, 0.08),
    0px 2px 3px 0px rgba(0, 0, 0, 0.17);

  cursor: pointer;
`;

const LoginBtnContent = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export default Login;
