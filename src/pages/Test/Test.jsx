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

  // 페이지가 처음 로드될 때 typeSum을 초기화
  useEffect(() => {
    const resetTypeSum = typeSum.map((item) => ({ ...item, sum: 0 }));
    setList(resetTypeSum);
  }, []);

  // 선택된 답변 처리
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

  // 뒤로가기 처리
  const handleGoBack = useCallback(() => {
    if (page > 0) {
      // 현재 페이지를 이전 페이지로 업데이트
      setPage((prevPage) => prevPage - 1);

      // 이전 페이지의 답변 제거 및 점수 조정
      setList((prevList) => {
        const newList = [...prevList];
        const prevQuestion = testList[page - 1]; // 이전 페이지 질문
        const prevAnswerIndex = selectedAnswerIndices[page - 1]; // 이전 페이지에서 선택된 답변의 인덱스

        if (prevQuestion) {
          // 선택된 답변의 유형과 점수
          const answerType = prevQuestion.a[prevAnswerIndex]?.type;
          const answerCount = prevQuestion.a[prevAnswerIndex]?.count;

          // 점수 감소
          for (let i = 0; i < newList.length; i++) {
            if (answerType === newList[i].name) {
              newList[i].sum -= answerCount;
              console.log("지금 점수:", newList);
              break;
            }
          }
        }

        return newList;
      });

      // 선택된 답변 인덱스도 업데이트
      setSelectedAnswerIndices((prevIndices) => {
        const newIndices = { ...prevIndices };
        delete newIndices[page - 1];
        return newIndices;
      });
    }
  }, [page, selectedAnswerIndices]);

  // 답변 선택 후 목록 업데이트 및 페이지 이동
  useEffect(() => {
    let timer;
    if (selectedAnswer) {
      timer = setTimeout(() => {
        setList((prevList) => {
          const newList = [...prevList];
          for (let i = 0; i < newList.length; i++) {
            if (selectedAnswer.type === newList[i].name) {
              newList[i].sum += selectedAnswer.count;
              console.log("지금 점수:", newList);
            }
          }
          return newList;
        });

        setPage((prevPage) => {
          const nextPage = prevPage + 1;
          if (nextPage >= testList.length) {
            setMbti(); // 모든 질문이 완료되면 MBTI 계산
            nav("/homelogin");
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
  }, [selectedAnswer]);

  // MBTI 계산 함수
  function setMbti() {
    let DorO = list[0].sum <= 6 ? "O" : "D";
    let RorS = list[1].sum <= 6 ? "S" : "R";
    let PorN = list[2].sum <= 6 ? "N" : "P";
    let TorW = list[3].sum <= 6 ? "W" : "T";
    let mbti = DorO + RorS + PorN + TorW;
    console.log("결과:", mbti);
  }

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
  width: 100%;
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
