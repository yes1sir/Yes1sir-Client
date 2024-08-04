import { styled } from "styled-components";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 import
import useNavigateToLogin from "@/utils/common/useNavigateToLogin";

import HamburgerIcon from "@/assets/svgs/hamburger.svg?react";
import LogoIcon from "@/assets/svgs/Logo.svg?react";

function TopNav() {
  const navigate = useNavigate();
  const navigateToLogin = useNavigateToLogin();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <StyledLogoIcon onClick={handleLogoClick} />{" "}
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

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0rem 2.6rem;
  gap: 114.1rem;
`;

const LoginBtn = styled.button`
  width: 8.8rem;
  height: 4rem;
  color: ${({ theme }) => theme.colors.w01};
  ${({ theme }) => theme.fonts.M3_headline_large};
`;

const StyledLogoIcon = styled(LogoIcon)`
  cursor: pointer;
`;
