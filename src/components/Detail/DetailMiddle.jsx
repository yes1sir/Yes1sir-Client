import { styled } from "styled-components";

function DetailMiddle() {
  return (
    <DetailMiddleBox>
      <ReviewContainer>
        <ReviewText>리뷰</ReviewText>
        <ReviewNumber>(21)</ReviewNumber>
      </ReviewContainer>
      <ReviewPostBtn>작성하기 &#62;</ReviewPostBtn>
    </DetailMiddleBox>
  );
}

export default DetailMiddle;

const DetailMiddleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 144rem;
  height: 8.5rem;
  background-color: lightgray;
  gap: 98rem;
`;

const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;
`;

const ReviewText = styled.p`
  color: ${({ theme }) => theme.colors.b01};
  ${({ theme }) => theme.fonts.M3_detail_large};
`;

const ReviewNumber = styled.p`
  color: ${({ theme }) => theme.colors.b01};
  ${({ theme }) => theme.fonts.M3_detail_small};
`;

const ReviewPostBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 4rem;
`;
