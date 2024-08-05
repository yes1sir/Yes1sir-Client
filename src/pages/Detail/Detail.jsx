import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DetailTop from "@/components/Detail/DetailTop";
import DetailMiddle from "@/components/Detail/DetailMiddle";
import ReviewModal from "@/components/Detail/ReviewModal";
import DetailBottom from "@/components/Detail/DetailBottom";
import axios from "axios";

function Detail() {
  const { productId } = useParams();
  const [isReviewModalOpen, setReviewModalOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const [editingReview, setEditingReview] = useState(null);

  const handleReviewButtonClick = () => {
    setReviewModalOpen(true);
    setEditingReview(null);
  };

  const handleCloseModal = () => {
    setReviewModalOpen(false);
  };

  const handleReviewSubmit = async (text, image, score) => {
    const newReview = {
      text,
      image,
      score,
      date: new Date().toISOString().split("T")[0].replace(/-/g, "."),
      userName,
    };

    if (editingReview !== null) {
      const updatedReviews = [...reviews];
      updatedReviews[editingReview] = newReview;
      setReviews(updatedReviews);
    } else {
      setReviews([...reviews, newReview]);
    }

    setReviewModalOpen(false);

    try {
      const response = await axios.post(
        `http://api.yessir.site/api/products/${productId}/reviews`,
        {
          userName,
          rating: score,
          comment: text,
        }
      );
      console.log("Review submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
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
