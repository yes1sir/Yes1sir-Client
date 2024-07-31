import { styled } from "styled-components";

import HomeLogoutText from "@/components/HomeLogout/HomeLogoutText";
import HomeLogoutFix from "@/components/HomeLogout/HomeLogoutFix";
import HomeLogoutMbti from "../../components/HomeLogout/HomeLogoutMbti";

function HomeLogout() {
  return (
    <HomeLogoutWrapper>
      <HomeLogoutText />
      <HomeLogoutFix />
      <HomeLogoutMbti />
    </HomeLogoutWrapper>
  );
}

export default HomeLogout;

const HomeLogoutWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 144rem;
  height: 170.3rem;
  background-image: url("src/assets/images/bg.png");
  background-size: cover;
`;
