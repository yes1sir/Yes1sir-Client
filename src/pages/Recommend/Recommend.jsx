import styled from "styled-components";
import { useLocation } from "react-router-dom";
import RecommendIngredient from "@/components/Recommend/RecommendIngredient";

function Recommend() {
  const location = useLocation();
  const { title, skinType } = location.state;

  console.log(skinType);

  return (
    <RecommendWrapper>
      <h1>{title}</h1>
      <RecommendIngredient skinType={skinType} />
    </RecommendWrapper>
  );
}

export default Recommend;

const RecommendWrapper = styled.main`
  display: flex;
  align-items: center;
  width: 144rem;
  height: 50rem;
  background-image: url("src/assets/images/bg.png");
  background-size: cover;
`;
