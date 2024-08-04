import { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import SelectBox from "../../components/Target/SelectBox";
import ProgressIndicator from "../../components/Test/ProgressIndicator";

import testList from "@/constants/Test/testList";
import typeSum from "@/constants/Test/typeSum";
import ArrowBackIcon from "@/assets/svgs/arrow_back.svg?react";

function Test() {
  const nav = useNavigate();
  const [list, setList] = useState(typeSum);
  const [page, setPage] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [selectedAnswerIndices, setSelectedAnswerIndices] = useState({});

  useEffect(() => {
    const resetTypeSum = typeSum.map((item) => ({ ...item, sum: 0 }));
    setList(resetTypeSum);
  }, []);

  const handleAnswer = useCallback(
    (type, count, idx) => {
      setSelectedAnswer({ type, count, idx });
      setSelectedAnswerIndices((prev) => ({
        ...prev,
        [page]: idx,
      }));
    },
    [page]
  );

  const handleGoBack = useCallback(() => {
    if (page > 0) {
      setPage((prevPage) => prevPage - 1);

      setList((prevList) => {
        const newList = [...prevList];
        const prevQuestion = testList[page - 1];
        const prevAnswerIndex = selectedAnswerIndices[page - 1];

        if (prevQuestion) {
          const answerType = prevQuestion.a[prevAnswerIndex]?.type;
          const answerCount = prevQuestion.a[prevAnswerIndex]?.count;

          for (let i = 0; i < newList.length; i++) {
            if (answerType === newList[i].name) {
              newList[i].sum -= answerCount;
              break;
            }
          }
        }

        return newList;
      });

      setSelectedAnswerIndices((prevIndices) => {
        const newIndices = { ...prevIndices };
        delete newIndices[page - 1];
        return newIndices;
      });
    }
  }, [page, selectedAnswerIndices]);

  const setMbti = useCallback(() => {
    let DorO = list[0].sum <= 6 ? "O" : "D";
    let RorS = list[1].sum <= 6 ? "S" : "R";
    let PorN = list[2].sum <= 6 ? "N" : "P";
    let TorW = list[3].sum <= 6 ? "W" : "T";
    let mbti = DorO + RorS + PorN + TorW;
    nav(`/homelogin?mbti=${mbti}`);
  }, [list, nav]);

  useEffect(() => {
    let timer;
    if (selectedAnswer) {
      timer = setTimeout(() => {
        setList((prevList) => {
          const newList = [...prevList];
          for (let i = 0; i < newList.length; i++) {
            if (selectedAnswer.type === newList[i].name) {
              newList[i].sum += selectedAnswer.count;
            }
          }
          return newList;
        });

        setPage((prevPage) => {
          const nextPage = prevPage + 1;
          if (nextPage >= testList.length) {
            setMbti();
          }
          return nextPage;
        });

        setSelectedAnswer(null);
      }, 200);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [selectedAnswer, setMbti]);

  return (
    <TestWrapper>
      {page >= 1 && (
        <BackWrapper>
          <BackBtn role="button" onClick={handleGoBack}>
            <ArrowBackIcon />
          </BackBtn>
        </BackWrapper>
      )}
      <ProgressIndicator page={page} lastPage={testList.length} />
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
    </TestWrapper>
  );
}

export default Test;

const BackWrapper = styled.div`
  display: flex;
  width: 144rem;
  padding-left: 50px;
  padding-top: 23px;
`;

const BackBtn = styled.div`
  cursor: pointer;
`;

const TestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 144rem;
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
