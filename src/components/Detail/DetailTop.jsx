import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import StarIcon from "@/assets/svgs/star.svg?react";
import DetailPurposeBtn from "./DetailPurposeBtn";
import DetailRecommendBtn from "./DetailRecommendBtn";
import DetailBuyBtn from "./DetailBuyBtn";

function DetailTop() {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}api/products/${productId}`
        );
        setProductData(response.data);
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      }
    };

    fetchProductData();
  }, [productId]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  const { image, brandName, productName, recommendedType, price, purpose } =
    productData;

  const recommendTypes = recommendedType.split(",").map((type) => type.trim());
  const purposes = purpose.split(",").map((type) => type.trim());

  return (
    <DetailTopContainer>
      <ImgContainer>
        <ImgDetail src={image} alt="img" />
      </ImgContainer>
      <DetailTopInfo>
        <DetailBrandName>{brandName}</DetailBrandName>
        <DetailProductName>{productName}</DetailProductName>
        <StarBox>
          <StarIcon />
          <StarBoxNumber>4.5 (21)</StarBoxNumber>
          <StarBoxReview>리뷰보기</StarBoxReview>
        </StarBox>
        <DetailPrice>{price}원</DetailPrice>
        <Text>추천 피부 타입</Text>
        <BtnBox>
          {recommendTypes.map((type, index) => (
            <DetailRecommendBtn key={index} text={type} />
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
  gap: 1.2rem;
`;

const StarBoxNumber = styled.p`
  ${({ theme }) => theme.fonts.M3_content_xxsmall};
`;

const StarBoxReview = styled.p`
  ${({ theme }) => theme.fonts.M3_content_xxsmall};
  margin-left: 1.8rem;
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
