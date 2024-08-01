import { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import SelectBox from "../../components/Target/SelectBox";
import testList from "@/constants/Test/testList";
import typeSum from "@/constants/Test/typeSum";
function Test() {
  const [list, setList] = useState(typeSum);
  const [page, setPage] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = useCallback((type, count, idx) => {
    setSelectedAnswer({ type, count, idx });
  }, []);

  useEffect(() => {
    let timer;
    if (selectedAnswer) {
      timer = setTimeout(() => {
        setList((prevList) => {
          const newList = [...prevList];
          for (let i = 0; i < newList.length; i++) {
            if (selectedAnswer.type === newList[i].name) {
              newList[i].sum += selectedAnswer.count;
              console.log(newList);
            }
          }
          return newList;
        });

        setPage((prevPage) => prevPage + 1);

        if (selectedAnswer.idx + 1 === testList.length) {
          setMbti();
        }

        setSelectedAnswer(null);
      }, 500);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [selectedAnswer]);

  function setMbti() {
    let DorO = list[0].sum <= 6 ? "O" : "D";
    let RorS = list[1].sum <= 6 ? "S" : "R";
    let PorN = list[2].sum <= 6 ? "N" : "P";
    let TorW = list[3].sum <= 6 ? "W" : "T";
    let mbti = DorO + RorS + PorN + TorW;
    console.log("결과:", mbti);
    // 결과 값에 따라 mbti로 계산해준다.
  }

  return (
    <TestWrapper>
      <ProgressWrapper>
        <ProgressBar>
          <Progress style={{ width: 75 * (page + 1) }} />
        </ProgressBar>
        {page + 1} / {testList.length}
      </ProgressWrapper>
      <div>
        {testList.map((val, idx) => (
          <div key={idx} style={{ display: page === idx ? "block" : "none" }}>
            {val.q.map((qval, qidx) => (
              <TestQuestion key={qidx}>
                {page + 1}. {qval}
              </TestQuestion>
            ))}
            <TestAnswerWrapper>
              {val.a.map((aval, aidx) => (
                <SelectBox
                  key={aidx}
                  onClick={() => handleAnswer(aval.type, aval.count, page)}
                  text={aval.text}
                />
              ))}
            </TestAnswerWrapper>
          </div>
        ))}
      </div>
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
  text-align: center;
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
  width: ${(props) => props.step};
  height: 1.8rem;
  border-radius: 6.4rem;
  background-color: ${({ theme }) => theme.colors.w02};
`;
