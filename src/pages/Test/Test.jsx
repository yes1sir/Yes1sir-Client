import { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import SelectBox from "../../components/Target/SelectBox";
import HomeLoginBtn from "../../components/common/HomeLoginBtn";
import ProgressIndicator from "../../components/Test/ProgressIndicator";

import testList from "@/constants/Test/testList";
import typeSum from "@/constants/Test/typeSum";

function Test() {
  const [list, setList] = useState(typeSum);
  const [page, setPage] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [selectedAnswerIndices, setSelectedAnswerIndices] = useState({});

  const handleAnswer = useCallback((type, count, idx) => {
    setSelectedAnswer({ type, count, idx });
    setSelectedAnswerIndices(prev => ({ ...prev, [page]: idx }));
  }, [page]);

  const handleGoBack = useCallback(() => {
    if (page > 0) {
      setPage(prevPage => prevPage - 1);
      setSelectedAnswerIndices(prev => {
        const newSelectedAnswerIndices = { ...prev };
        delete newSelectedAnswerIndices[page];
        return newSelectedAnswerIndices;
      });
    }
  }, [page]);

  useEffect(() => {
    let timer;
    if (selectedAnswer) {
      timer = setTimeout(() => {
        setList(prevList => {
          const newList = [...prevList];
          for (let i = 0; i < newList.length; i++) {
            if (selectedAnswer.type === newList[i].name) {
              newList[i].sum += selectedAnswer.count;
            }
          }
          return newList;
        });

        setPage(prevPage => prevPage + 1);

        if (selectedAnswer.idx + 1 === testList.length) {
          setMbti();
        }

        setSelectedAnswer(null);
      }, 200);
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

  useEffect(() => {
    console.log('Current selectedAnswerIndices:', selectedAnswerIndices);
  }, [selectedAnswerIndices]);

  return (
    <TestWrapper>
      <ProgressIndicator page={page} lastPage={testList.length} />
      <div onClick={handleGoBack}>뒤로가기</div>
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
                  onClick={() => handleAnswer(aval.type, aval.count, aidx)}
                  text={aval.text}
                  isSelected={selectedAnswerIndices[page] === aidx}
                />
              ))}
            </TestAnswerWrapper>
          </div>
        ))}
      </div>

      {page >= testList.length ? (
        <BtnWrapper>
          <HomeLoginBtn
            backgroundColor="#FFF"
            color="#2E2856"
            text="결과 보기"
          />
          <HomeLoginBtn
            backgroundColor="#FFF"
            color="#2E2856"
            text="추천 제품 보기"
          />
        </BtnWrapper>
      ) : (
        <div></div>
      )}
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

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13rem;
`;
