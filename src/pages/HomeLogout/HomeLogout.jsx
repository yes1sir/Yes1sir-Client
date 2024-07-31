import { styled } from "styled-components";

import HomeLogoutText from "@/components/HomeLogout/HomeLogoutText";
import HomeLogoutFix from "@/components/HomeLogout/HomeLogoutFix";

function HomeLogout() {
  return (
    <HomeLogoutWrapper>
      <HomeLogoutText />
      <HomeLogoutFix />
    </HomeLogoutWrapper>
  );
}

export default HomeLogout;

const HomeLogoutWrapper = styled.main`
  display: flex;
  width: 144rem;
  height: 100vh;
  background-image: url("src/assets/images/bg.png");
  background-size: cover;
`;
