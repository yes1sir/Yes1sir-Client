import styled from "styled-components";

import PropTypes from "prop-types";

import customIngredients from "@/constants/Recommend/customIngredient";
import avoidIngredients from "@/constants/Recommend/avoidIngredient";

RecommendIngredient.propTypes = {
  skinType: PropTypes.string.isRequired,
};

function RecommendIngredient({ skinType }) {
  return (
    <RecommendIngredientWrapper>
      <CustomIngredient skinType={skinType}>
        {customIngredients[skinType]}
      </CustomIngredient>
      <AvoidIngredient skinType={skinType}>
        {avoidIngredients[skinType]}
      </AvoidIngredient>
    </RecommendIngredientWrapper>
  );
}

export default RecommendIngredient;

const RecommendIngredientWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
`;

const CustomIngredient = styled.p`
  color: ${({ theme }) => theme.colors.w01};
  ${({ theme }) => theme.fonts.M3_content_xxsmall};
`;

const AvoidIngredient = styled.p`
  color: ${({ theme }) => theme.colors.w01};
  ${({ theme }) => theme.fonts.M3_content_xxsmall};
`;
