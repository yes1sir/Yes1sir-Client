import { styled } from "styled-components";
import HomeLoginTitle from "@/components/HomeLogin/HomeLoginTitle";

function HomeLogin() {
  return (
    <HomeLoginWrapper>
      <HomeLoginTitle />
    </HomeLoginWrapper>
  );
}

export default HomeLogin;

const HomeLoginWrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 144rem;
  height: 170.3rem;
  background-image: url("src/assets/images/bg.png");
  background-size: cover;
`;
