import styled from "styled-components";
import PropTypes from "prop-types";

RecommendItem.propTypes = {
  image: PropTypes.string.isRequired,
  brandName: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  recommendType: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  $bgColor: PropTypes.string.isRequired,
};

function RecommendItem({
  image,
  brandName,
  productName,
  recommendType,
  price,
  $bgColor,
}) {
  return (
    <RecommendItemWrapper>
      <ImgContainer>
        <ImgRecommend src={image} alt="img" />
      </ImgContainer>
      <RecommendBrandName>{brandName}</RecommendBrandName>
      <RecommendProductName>{productName}</RecommendProductName>
      <RecommendTypeContainer>
        <RecommendTypeBtn $bgColor={$bgColor}>추천타입</RecommendTypeBtn>
        <RecommendTypeName $bgColor={$bgColor}>
          {recommendType}
        </RecommendTypeName>
      </RecommendTypeContainer>
      <RecommendPrice>{price}원</RecommendPrice>
    </RecommendItemWrapper>
  );
}

export default RecommendItem;

const RecommendItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding-top: 3rem;
  width: 30rem;
`;

const ImgContainer = styled.div`
  display: flex;
  width: 25.2rem;
  height: 25.2rem;
`;

const RecommendBrandName = styled.p`
  ${({ theme }) => theme.fonts.M3_label_large};
  color: ${({ theme }) => theme.colors.b01};
`;

const RecommendProductName = styled.p`
  ${({ theme }) => theme.fonts.M3_body_base};
  color: ${({ theme }) => theme.colors.b01};
`;

const RecommendTypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`;

const RecommendTypeBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7rem;
  height: 2.4rem;
  border-radius: 100px;
  ${({ theme }) => theme.fonts.M3_body_base};
  background-color: ${({ $bgColor }) => $bgColor};
  color: ${({ theme }) => theme.colors.w01};
`;

const RecommendTypeName = styled.p`
  color: ${({ $bgColor }) => $bgColor};
  ${({ theme }) => theme.fonts.M3_heading};
`;

const RecommendPrice = styled.p`
  ${({ theme }) => theme.fonts.M3_body_base};
  color: ${({ theme }) => theme.colors.b01};
`;

const ImgRecommend = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;