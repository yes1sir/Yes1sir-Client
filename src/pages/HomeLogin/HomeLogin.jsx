import { styled } from "styled-components";
import HomeLoginTitle from "@/components/HomeLogin/HomeLoginTitle";
import HomeLogoutMbti from "@/components/HomeLogout/HomeLogoutMbti";
import HomeLoginBtn from "@/components/common/HomeLoginBtn";

function HomeLogin() {
  return (
    <HomeLoginWrapper>
      <HomeLoginTitle />
      <HomeLoginBtn
        backgroundcolor="#42A5C4"
        color="#FFF"
        text="다시 진단받기"
      />
      <HomeLogoutMbti />
    </HomeLoginWrapper>
  );
}

export default HomeLogin;

const HomeLoginWrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 6.5rem;
  width: 144rem;
  height: 170.3rem;
  background-image: url("src/assets/images/bg.png");
  background-size: cover;
`;
