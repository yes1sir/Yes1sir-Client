import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DetailTop from "@/components/Detail/DetailTop";
import DetailMiddle from "@/components/Detail/DetailMiddle";
import ReviewModal from "@/components/Detail/ReviewModal";
import DetailBottom from "@/components/Detail/DetailBottom";
import { useLocation } from "react-router-dom";

import axios from "axios";

function Detail() {
  const { productId } = useParams();
  const [isReviewModalOpen, setReviewModalOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [userName, setUserName] = useState("");
  const [editingReview, setEditingReview] = useState(null);
  const detailBottomRef = useRef(null);
  const location = useLocation();
  const { skinType } = location.state;

  console.log(skinType);

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }

    const getReviews = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/products/${productId}`
        );
        const fetchedReviews = response.data.reviews.map((review) => ({
          text: review.comment,
          score: review.rating,
          reviewId: review.reviewId.toString(),
          date: new Date(review.reviewDate)
            .toISOString()
            .split("T")[0]
            .replace(/-/g, "."),
          userName: review.userName,
        }));
        setReviews(fetchedReviews);
      } catch (error) {
        console.error("리뷰 가져오는 중 오류 발생:", error);
      }
    };

    getReviews();
  }, [productId]);

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

    try {
      let response;
      if (editingReview !== null) {
        const reviewToUpdate = reviews[editingReview];
        response = await axios.patch(
          `${import.meta.env.VITE_BASE_URL}/api/products/${productId}/reviews/${reviewToUpdate.reviewId}`,
          {
            rating: score,
            comment: text,
          }
        );
        const updatedReviews = [...reviews];
        updatedReviews[editingReview] = {
          ...newReview,
          reviewId: reviewToUpdate.reviewId,
        };
        setReviews(updatedReviews);
      } else {
        response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/products/${productId}/reviews`,
          {
            userName,
            rating: score,
            comment: text,
          }
        );
        setReviews([
          ...reviews,
          { ...newReview, reviewId: response.data.reviewId },
        ]);
      }
    } catch (error) {
      console.error("리뷰 제출 중 오류 발생:", error);
    } finally {
      setReviewModalOpen(false);
    }
  };

  const handleReviewDelete = async (reviewId) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/api/products/${productId}/reviews/${reviewId}`
      );
      setReviews(reviews.filter((review) => review.reviewId !== reviewId));
    } catch (error) {
      console.error("리뷰 삭제 중 오류 발생:", error);
    }
  };

  const handleReviewEdit = (index) => {
    setEditingReview(index);
    setReviewModalOpen(true);
  };

  const scrollToReviews = () => {
    if (detailBottomRef.current) {
      detailBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <DetailWrapper>
      <DetailTop reviewCount={reviews.length} onReviewClick={scrollToReviews} />
      <DetailMiddle
        onReviewButtonClick={handleReviewButtonClick}
        reviewCount={reviews.length}
      />
      {isReviewModalOpen && (
        <ReviewModal
          onClose={handleCloseModal}
          onSubmit={handleReviewSubmit}
          review={editingReview !== null ? reviews[editingReview] : null}
        />
      )}
      {reviews.length > 0 && (
        <div ref={detailBottomRef}>
          <DetailBottom
            reviews={reviews}
            onDelete={handleReviewDelete}
            onEdit={handleReviewEdit}
          />
        </div>
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
