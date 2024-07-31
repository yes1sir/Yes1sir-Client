import { styled } from "styled-components";
import useNavigateToLogin from "@/utils/common/useNavigateToLogin";

import HamburgerIcon from "@/assets/svgs/hamburger.svg?react";

function TopNav() {
  const navigateToLogin = useNavigateToLogin();

  return (
    <HeaderWrapper>
      <LogoBtn>LOGO</LogoBtn>
      <HeaderContainer>
        <LoginBtn onClick={navigateToLogin}>Log In</LoginBtn>
        <HamburgerIcon />
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default TopNav;

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  width: 144rem;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.b01};
`;

const LogoBtn = styled.button`
  width: 8.3rem;
  height: 3.1111rem;
  margin-left: 4.9rem;
  color: ${({ theme }) => theme.colors.w01};
  text-align: center;
  ${({ theme }) => theme.fonts.M3_headline_large};
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4.2rem;
  margin-left: 109.9rem;
`;

const LoginBtn = styled.button`
  width: 8.8rem;
  height: 4rem;
  color: ${({ theme }) => theme.colors.w01};
  ${({ theme }) => theme.fonts.M3_headline_large};
`;
