import { styled } from "styled-components";
import HomeLogoutFixBoxContent from "@/components/HomeLogout/HomeLogoutFixBoxContent";
import useNavigateToLogin from "@/utils/common/useNavigateToLogin";

function HomeLogoutFix() {
  const navigateToLogin = useNavigateToLogin();

  return (
    <HomeLogoutFixContainer>
      <HomeLogoutFixBox>
        <HomeLogoutFixBoxContent />
      </HomeLogoutFixBox>
      <HomeLogoutFixBtn onClick={navigateToLogin}>
        나의 피부타입 진단하기
      </HomeLogoutFixBtn>
    </HomeLogoutFixContainer>
  );
}

export default HomeLogoutFix;

const HomeLogoutFixContainer = styled.div`
  display: flex;
  position: fixed;
  top: 20%;
  left: 60%;
  align-items: center;
  justify-content: center;
  width: 35.5rem;
  height: 66.3rem;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-left: 10rem;
`;

const HomeLogoutFixBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35.5rem;
  height: 57.1rem;
  border-radius: 32px;
  background: rgba(234, 231, 249, 0.5);
`;

const HomeLogoutFixBtn = styled.button`
  display: flex;
  width: 21.6rem;
  height: 4.2rem;
  border-radius: 32px;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.fonts.M3_title_large};
  text-align: center;
  color: ${({ theme }) => theme.colors.b01};
  background-color: ${({ theme }) => theme.colors.g01};
`;
