import PropTypes from "prop-types";
import styled from "styled-components";

function HomeLoginMbtiContent({ $bgColor, content, title }) {
  return (
    <HomeLoginMbtiContentWrapper $bgColor={$bgColor}>
      <ContentTitle>{title}</ContentTitle>
      <ContentText>{content}</ContentText>
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
  width: 144rem;
  height: 38.7rem;
  padding: 7.5rem 10rem;
  gap: 3.75rem;
  background-color: ${(props) => props.$bgColor};
`;

const ContentTitle = styled.p`
  color: ${({ theme }) => theme.colors.w01};
  ${({ theme }) => theme.fonts.M3_headline_xlarge};
`;

const ContentText = styled.p`
  color: ${({ theme }) => theme.colors.w01};
  ${({ theme }) => theme.fonts.M3_content_xsmall};
`;
