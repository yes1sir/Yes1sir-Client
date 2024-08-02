import styled from "styled-components";
import { useLocation } from "react-router-dom";
import RecommendIngredient from "@/components/Recommend/RecommendIngredient";
import RecommendItemSection from "@/components/Recommend/RecommendItemSection";

function Recommend() {
  const location = useLocation();
  const { title, skinType, $bgColor } = location.state;

  const customTitle = title
    .split("|")
    .map((line) => {
      const trimmedLine = line.trim();
      return `<span class="first-letter">${trimmedLine.charAt(0)}</span>${trimmedLine.slice(1)}`;
    })
    .join("<br>");

  return (
    <RecommendWrapper>
      <RecommendTopContainer>
        <RecommendType
          dangerouslySetInnerHTML={{ __html: customTitle }}
          $bgColor={$bgColor}
        />
        <RecommendIngredient skinType={skinType} />
      </RecommendTopContainer>
      <RecommendItemSection $bgColor={$bgColor} />
    </RecommendWrapper>
  );
}

export default Recommend;

const RecommendWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 144rem;
  height: 111rem;
`;

const RecommendTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 144rem;
  height: 70rem;
  padding: 6.1rem 10rem;
  background-image: url("src/assets/images/bg.png");
  background-size: cover;
  gap: 8rem;
`;

const RecommendType = styled.p`
  width: 60rem;
  color: ${({ theme }) => theme.colors.w01};
  ${({ theme }) => theme.fonts.M3_title_xlarge};
  text-align: left;
  white-space: pre-line;

  .first-letter {
    color: ${({ $bgColor }) => $bgColor};
    ${({ theme }) => theme.fonts.M3_title_xlarge};
  }
`;
