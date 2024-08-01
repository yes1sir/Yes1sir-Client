import styled from "styled-components";
import { useLocation } from "react-router-dom";
import RecommendIngredient from "@/components/Recommend/RecommendIngredient";

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
      <RecommendType
        dangerouslySetInnerHTML={{ __html: customTitle }}
        $bgColor={$bgColor}
      />
      <RecommendIngredient skinType={skinType} />
    </RecommendWrapper>
  );
}

export default Recommend;

const RecommendWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 144rem;
  height: 50rem;
  padding: 0rem 13.8rem;
  background-image: url("src/assets/images/bg.png");
  background-size: cover;
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
