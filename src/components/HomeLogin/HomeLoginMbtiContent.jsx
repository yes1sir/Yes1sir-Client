import PropTypes from "prop-types";
import styled from "styled-components";

function HomeLoginMbtiContent({ $bgColor }) {
  // 수정: $bgColor로 변경
  return (
    <HomeLoginMbtiContentWrapper $bgColor={$bgColor}>
      {" "}
      <ContentTitle>DRY | RESISTANT | PIGMENTED | TIGHT</ContentTitle>
      <ContentText>
        피부 건조증과 색소 침착이 DRPT 피부 타입의 주된 특징이며 염증이 거의없고
        주름이 거의 없습니다. 스킨 케어 처방은 30+ 이상의 매일 SPF, 보습 성분 및
        피부 미백 성분을 포함해야합니다. 매일 SPF30 이상의 선크림, 보습제,
        피부미백제를 추천합니다.
      </ContentText>
    </HomeLoginMbtiContentWrapper>
  );
}

HomeLoginMbtiContent.propTypes = {
  $bgColor: PropTypes.string.isRequired, // 수정: $bgColor로 변경
};

export default HomeLoginMbtiContent;

const HomeLoginMbtiContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 144rem;
  height: 38.7rem;
  padding: 7.5rem 10rem;
  gap: 3.75rem;
  background-color: ${(props) => props.$bgColor}; // 수정: $bgColor로 변경
`;

const ContentTitle = styled.p`
  color: ${({ theme }) => theme.colors.w01};
  ${({ theme }) => theme.fonts.M3_headline_xlarge};
`;

const ContentText = styled.p`
  color: ${({ theme }) => theme.colors.w01};
  ${({ theme }) => theme.fonts.M3_content_xsmall};
`;
