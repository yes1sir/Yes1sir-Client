import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
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
      <StyledLogoIcon onClick={handleLogoClick} />
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
  gap: 114.1rem;
  padding: 0rem 2.6rem;
  background-color: ${({ theme }) => theme.colors.b01};
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4.2rem;
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
