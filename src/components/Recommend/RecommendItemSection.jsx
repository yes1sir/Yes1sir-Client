import styled from "styled-components";
import PropTypes from "prop-types";
import RecommendItem from "@/components/Recommend/RecommendItem";

RecommendItemSection.propTypes = {
  $bgColor: PropTypes.string.isRequired,
  recommendItems: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      brandName: PropTypes.string.isRequired,
      recommendedType: PropTypes.string.isRequired,
      applicableTypes: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      purpose: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function RecommendItemSection({ $bgColor, recommendItems }) {
  return (
    <RecommendItemsWrapper>
      <RecommendItemContainer>
        {recommendItems.map((item) => (
          <RecommendItem key={item.productId} {...item} $bgColor={$bgColor} />
        ))}
      </RecommendItemContainer>
    </RecommendItemsWrapper>
  );
}

export default RecommendItemSection;

const RecommendItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.b01};
  background-color: ${({ theme }) => theme.colors.g01};
`;

const RecommendItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100rem;
`;
