import { styled } from "styled-components";

function HomeLogoutText() {
  return (
    <TextContainer>
      <FirstText>
        완벽한 피부, <br /> <br />
        맞춤형 스킨케어로 시작하세요.
      </FirstText>
      <SecondText>
        피부도 성격이 있어요. <br /> <br />
        16가지 유형의 피부 MBTI 테스트
      </SecondText>
    </TextContainer>
  );
}

export default HomeLogoutText;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18.5rem;
  margin-left: 10rem;
  margin-top: 15rem;
`;

const FirstText = styled.p`
  display: flex;
  color: ${({ theme }) => theme.colors.w01};
  ${({ theme }) => theme.fonts.M3_headline_normal};
`;

const SecondText = styled.p`
  width: 80rem;
  display: flex;
  color: ${({ theme }) => theme.colors.w01};
  text-align: right;
  ${({ theme }) => theme.fonts.M3_headline_normal};
`;
