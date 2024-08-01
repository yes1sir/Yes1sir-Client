import styled from "styled-components";
import SelectBox from "../../components/Target/SelectBox";

function Test() {
  return (
    <TestWrapper>
      <ProgressWrapper>
        <ProgressBar>
          <Progress />
        </ProgressBar>
        1/12
      </ProgressWrapper>
      <TestQuestion>
        1. 세안 후에 아무것도 바르지 않으면 당신의 피부는 어떻습니까?
      </TestQuestion>
      <TestAnswerWrapper>
        <SelectBox text={"매우 건조하다"} />
        <SelectBox text={"건조하다"} />
        <SelectBox text={"그냥 그렇다"} />
        <SelectBox text={"윤기가 있다"} />
      </TestAnswerWrapper>
    </TestWrapper>
  );
}

export default Test;

const TestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 102.4rem;
  background-color: ${({ theme }) => theme.colors.b01};
`;

const TestQuestion = styled.div`
  color: ${({ theme }) => theme.colors.w01};
  ${({ theme }) => theme.fonts.M3_headline_large};
`;

const TestAnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  margin-top: 69px;
`;

const ProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  margin-top: 4.3rem;
  margin-bottom: 6.7rem;
  color: ${({ theme }) => theme.colors.w01};
  ${({ theme }) => theme.fonts.M3_title_large}
`;

const ProgressBar = styled.div`
  width: 90rem;
  height: 1.8rem;
  border-radius: 6.4rem;
  background-color: ${({ theme }) => theme.colors.g04};
`;

const Progress = styled.div`
  width: 7.5rem; // 나중에 변경
  height: 1.8rem;
  border-radius: 6.4rem;
  background-color: ${({ theme }) => theme.colors.w02};
`;
