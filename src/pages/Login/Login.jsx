import styled from "styled-components";
import Backspace from "../../components/common/Backspace";
import GoogleIcon from "@/assets/svgs/google_logo.svg?react";

function Login() {
  return (
    <LoginWrapper>
      <Backspace />

      <LoginTop>
        <LogoWrapper>LOGO</LogoWrapper>
        <Testdescription>16가지 유형의 피부 MBTI 테스트</Testdescription>
      </LoginTop>

      <LoginBottom>
        <Logindescription>로그인</Logindescription>
        <LoginBtn>
          <GoogleIcon>icon</GoogleIcon>
          <LoginBtnContent>Google로 로그인</LoginBtnContent>
        </LoginBtn>
      </LoginBottom>
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
