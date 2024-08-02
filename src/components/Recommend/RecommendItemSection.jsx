import styled from "styled-components";
import PropTypes from "prop-types";
import RecommendItemData from "@/constants/Recommend/RecommendItemData";
import RecommendItem from "@/components/Recommend/RecommendItem";

RecommendItemSection.propTypes = {
  $bgColor: PropTypes.string.isRequired,
};

function RecommendItemSection({ $bgColor }) {
  return (
    <RecommendItemsWrapper>
      <RecommendItemContainer>
        {RecommendItemData.map((item) => (
          <RecommendItem key={item.id} {...item} $bgColor={$bgColor} />
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
