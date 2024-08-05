import PropTypes from "prop-types";
import styled from "styled-components";

function DetailMiddle({ onReviewButtonClick, reviewCount }) {
  return (
    <DetailMiddleBox>
      <ReviewContainer>
        <ReviewText>리뷰</ReviewText>
        <ReviewNumber>({reviewCount})</ReviewNumber>
      </ReviewContainer>
      <ReviewPostBtn onClick={onReviewButtonClick}>
        작성하기 &#62;
      </ReviewPostBtn>
    </DetailMiddleBox>
  );
}

DetailMiddle.propTypes = {
  onReviewButtonClick: PropTypes.func.isRequired,
  reviewCount: PropTypes.number.isRequired,
};

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
