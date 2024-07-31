import styled from "styled-components";

import ArrowExpandIcon from "@/assets/svgs/arrow-expand.svg?react";
import fixContent from "@/constants/HomeLogout/fixContent";

function HomeLogoutFixBoxContent() {
  return (
    <HomeLogoutFixBoxContentContainer>
      {fixContent.map((pair, index) => (
        <PairContainer key={index}>
          <Element>
            {pair.left.text}
            <Label>{pair.left.label}</Label>
          </Element>
          <ArrowExpandIcon />
          <Element>
            {pair.right.text}
            <Label>{pair.right.label}</Label>
          </Element>
        </PairContainer>
      ))}
    </HomeLogoutFixBoxContentContainer>
  );
}

export default HomeLogoutFixBoxContent;

const HomeLogoutFixBoxContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const PairContainer = styled.div`
  display: flex;
  width: 24.3rem;
  justify-content: space-between;
`;

const Element = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.fonts.M3_content_normal};
  color: ${({ theme }) => theme.colors.b01};
`;

const Label = styled.div`
  width: 9rem;
  height: 1.9rem;
  text-align: center;

  ${({ theme }) => theme.fonts.M3_content_small};
  color: ${({ theme }) => theme.colors.w01};
`;
