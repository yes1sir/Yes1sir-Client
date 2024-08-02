import { useState } from "react";
import styled from "styled-components";
import DetailTop from "@/components/Detail/DetailTop";
import DetailMiddle from "@/components/Detail/DetailMiddle";
import ReviewModal from "@/components/Detail/ReviewModal";

function Detail() {
  const [isReviewModalOpen, setReviewModalOpen] = useState(false);

  const handleReviewButtonClick = () => {
    setReviewModalOpen(true);
  };

  const handleCloseModal = () => {
    setReviewModalOpen(false);
  };

  return (
    <DetailWrapper>
      <DetailTop />
      <DetailMiddle onReviewButtonClick={handleReviewButtonClick} />
      {isReviewModalOpen && <ReviewModal onClose={handleCloseModal} />}
    </DetailWrapper>
  );
}

export default Detail;

const DetailWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 144rem;
  height: 177.2rem;
  background-color: ${({ theme }) => theme.colors.g01};
`;
