import styled from "styled-components";
import mbtiCircles from "@/constants/HomeLogout/mbtiCircles";

const HomeLogoutMbti = () => {
  return (
    <HomeLogoutMbtiWrapper>
      <HomeLogoutMbtiContainer>
        {mbtiCircles.map((circle, index) => (
          <Circle key={index} borderColor={circle.color}>
            {circle.text}
          </Circle>
        ))}
      </HomeLogoutMbtiContainer>
    </HomeLogoutMbtiWrapper>
  );
};

export default HomeLogoutMbti;

const HomeLogoutMbtiWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75.6rem;
  height: 75.6rem;
  margin-left: 10rem;
  margin-top: 15.4rem;
`;

const HomeLogoutMbtiContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.563rem;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18.4543rem;
  height: 18.4543rem;
  border-radius: 50%;
  border: 6px solid ${(props) => props.borderColor};
  ${({ theme }) => theme.fonts.M3_content_large};
  color: ${({ theme }) => theme.colors.b01};
  background-color: ${({ theme }) => theme.colors.g01};
`;
