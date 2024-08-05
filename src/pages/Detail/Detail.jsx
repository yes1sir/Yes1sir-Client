import { useState } from "react";
import styled from "styled-components";
import DetailTop from "@/components/Detail/DetailTop";
import DetailMiddle from "@/components/Detail/DetailMiddle";
import ReviewModal from "@/components/Detail/ReviewModal";
import DetailBottom from "@/components/Detail/DetailBottom";

function Detail() {
  const [isReviewModalOpen, setReviewModalOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [username] = useState("유승빈"); // 추후 API로부터 받아올 username 초기 값 설정
  const [editingReview, setEditingReview] = useState(null);

  const handleReviewButtonClick = () => {
    setReviewModalOpen(true);
    setEditingReview(null);
  };

  const handleCloseModal = () => {
    setReviewModalOpen(false);
  };

  const handleReviewSubmit = (text, image) => {
    const newReview = {
      text,
      image,
      date: new Date().toISOString().split("T")[0].replace(/-/g, "."),
      username,
    };

    if (editingReview !== null) {
      const updatedReviews = [...reviews];
      updatedReviews[editingReview] = newReview;
      setReviews(updatedReviews);
    } else {
      setReviews([...reviews, newReview]);
    }

    setReviewModalOpen(false);
  };

  const handleReviewDelete = (index) => {
    setReviews(reviews.filter((_, i) => i !== index));
  };

  const handleReviewEdit = (index) => {
    setEditingReview(index);
    setReviewModalOpen(true);
  };

  return (
    <DetailWrapper>
      <DetailTop />
      <DetailMiddle onReviewButtonClick={handleReviewButtonClick} />
      {isReviewModalOpen && (
        <ReviewModal
          onClose={handleCloseModal}
          onSubmit={handleReviewSubmit}
          review={editingReview !== null ? reviews[editingReview] : null}
        />
      )}
      {reviews.length > 0 && (
        <DetailBottom
          reviews={reviews}
          onDelete={handleReviewDelete}
          onEdit={handleReviewEdit}
        />
      )}
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
