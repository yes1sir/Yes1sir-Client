import PropTypes from "prop-types";
import styled from "styled-components";
import HomeLoginBtn from "@/components/common/HomeLoginBtn";

function HomeLoginMbtiContent({ $bgColor, content, title }) {
  return (
    <HomeLoginMbtiContentWrapper $bgColor={$bgColor}>
      <ContentTitle>{title}</ContentTitle>
      <ContentText>{content}</ContentText>
      <HomeLoginBtnContainer>
        <HomeLoginBtn
          backgroundColor="#FFF"
          color="black"
          text="제품 추천 받기"
        />
      </HomeLoginBtnContainer>
    </HomeLoginMbtiContentWrapper>
  );
}

HomeLoginMbtiContent.propTypes = {
  $bgColor: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HomeLoginMbtiContent;

const HomeLoginMbtiContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 144rem;
  padding: 7.5rem 10rem 5rem;
  gap: 3.75rem;
  background-color: ${(props) => props.$bgColor};
`;

const ContentTitle = styled.p`
  color: ${({ theme }) => theme.colors.w01};
  ${({ theme }) => theme.fonts.M3_headline_xlarge};
`;

const ContentText = styled.p`
  text-align: start;
  color: ${({ theme }) => theme.colors.w01};
  ${({ theme }) => theme.fonts.M3_content_xsmall};
`;

const HomeLoginBtnContainer = styled.div`
  margin-left: 100rem;
`;
