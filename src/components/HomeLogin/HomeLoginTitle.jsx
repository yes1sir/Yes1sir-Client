import { styled } from "styled-components";

function HomeLoginTitle() {
  return <Title>유승빈님의 피부타입은 DRPT입니다</Title>;
}

export default HomeLoginTitle;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.M3_title_normal};
  color: ${({ theme }) => theme.colors.w01};
  margin-top: 12.3rem;
`;
