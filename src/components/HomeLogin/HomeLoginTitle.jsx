import styled from "styled-components";
import PropTypes from "prop-types";

HomeLoginTitle.propTypes = {
  name: PropTypes.string.isRequired,
  skinType: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

function HomeLoginTitle({ name, skinType, textColor }) {
  return (
    <Title>
      {name}님의 피부타입은{" "}
      <SkinTypeSpan textColor={textColor}>{skinType}</SkinTypeSpan>입니다
    </Title>
  );
}

export default HomeLoginTitle;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.M3_title_normal};
  color: ${({ theme }) => theme.colors.w01};
  margin-top: 12.3rem;
`;

const SkinTypeSpan = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "textColor",
})`
  ${({ theme }) => theme.fonts.M3_title_normal};
  color: ${({ textColor }) => textColor};
`;
