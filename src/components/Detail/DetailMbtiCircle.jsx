import styled from "styled-components";

import { useLocation } from "react-router-dom";

function DetailMbtiCircle() {
  const location = useLocation();
  const { $bgColor, skinType } = location.state;

  console.log(skinType);

  return (
    <DetailMbtiCircleWrapper>
      <Circle $bgColor={$bgColor}>{skinType}</Circle>
    </DetailMbtiCircleWrapper>
  );
}

export default DetailMbtiCircle;

const DetailMbtiCircleWrapper = styled.div`
  display: flex;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.8rem;
  height: 6.8rem;
  border-radius: 50%;
  background-color: ${({ $bgColor }) => $bgColor};
`;
