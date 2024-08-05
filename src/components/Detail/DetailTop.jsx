import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import styled from "styled-components";
import StarIcon from "@/assets/svgs/star.svg?react";
import DetailPurposeBtn from "./DetailPurposeBtn";
import DetailRecommendBtn from "./DetailRecommendBtn";
import DetailBuyBtn from "./DetailBuyBtn";

DetailTop.propTypes = {
  reviewCount: PropTypes.number.isRequired,
  onReviewClick: PropTypes.func.isRequired,
};

function DetailTop({ reviewCount, onReviewClick }) {
  const { productId } = useParams();
  const location = useLocation();
  const { $bgColor } = location.state;
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}api/products/${productId}`
        );
        setProductData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      }
    };

    fetchProductData();
  }, [productId]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  const {
    imageUrl,
    brand,
    name,
    recommendedType = "",
    price,
    benefits = "",
  } = productData;

  const recommendTypes = recommendedType.split(",").map((type) => type.trim());
  const purposes = benefits.split(",").map((type) => type.trim());

  return (
    <DetailTopContainer>
      <ImgContainer>
        <ImgDetail src={imageUrl} alt="img" />
      </ImgContainer>
      <DetailTopInfo>
        <DetailBrandName>{brand}</DetailBrandName>
        <DetailProductName>{name}</DetailProductName>
        <StarBox>
          <StarIcon />
          <StarBoxNumber>({reviewCount})</StarBoxNumber>
          <StarBoxReview onClick={onReviewClick}>리뷰보기</StarBoxReview>
        </StarBox>
        <DetailPrice>{price}원</DetailPrice>
        <Text>추천 피부 타입</Text>
        <BtnBox>
          {recommendTypes.map((type, index) => (
            <DetailRecommendBtn key={index} text={type} $bgColor={$bgColor} />
          ))}
        </BtnBox>
        <Text>목적</Text>
        <BtnBox>
          {purposes.map((purpose, index) => (
            <DetailPurposeBtn key={index} text={purpose} />
          ))}
        </BtnBox>
        <DetailBuyBtn text="구매하기" />
      </DetailTopInfo>
    </DetailTopContainer>
  );
}

export default DetailTop;

const DetailTopContainer = styled.div`
  display: flex;
  width: 144rem;
  height: 78rem;
  padding: 9rem 12rem;
  gap: 9.2rem;
`;

const ImgContainer = styled.div`
  width: 60rem;
  height: 60rem;
`;

const ImgDetail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DetailTopInfo = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  width: 51.3rem;
  height: 60rem;
  gap: 1.6rem;
`;

const DetailBrandName = styled.p`
  color: black;
  ${({ theme }) => theme.fonts.M3_content_xxsmall};
`;

const DetailProductName = styled.p`
  color: ${({ theme }) => theme.colors.b01};
  ${({ theme }) => theme.fonts.M3_detail_normal};
`;

const StarBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const StarBoxNumber = styled.p`
  ${({ theme }) => theme.fonts.M3_content_xxsmall};
`;

const StarBoxReview = styled.p`
  ${({ theme }) => theme.fonts.M3_content_xxsmall};
  margin-left: 1.8rem;
  cursor: pointer;
`;

const DetailPrice = styled.p`
  ${({ theme }) => theme.fonts.M3_detail_xnormal};
  color: ${({ theme }) => theme.colors.b01};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.b01};
  ${({ theme }) => theme.fonts.M3_content_xxsmall};
`;

const BtnBox = styled.div`
  display: flex;
  gap: 2rem;
`;
