import styled from "styled-components";
import { Link } from "react-router-dom";
import SelectBox from "../../components/Target/SelectBox";
import selectTargetData from "../../constants/Target/selectTarget";
import Backspace from "../../components/common/Backspace";
import { useState } from "react";

function Target() {
  // selectTargetData를 상태로 관리
  const [selectTarget, setSelectTarget] = useState(selectTargetData);

  // 선택 상태를 토글
  const toggleSelection = (id) => {
    setSelectTarget((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  return (
    <TargetWrapper>
      <Backspace />

      <TextWrapper>
        <TargetHeadline>피부 목표를 설정해주세요</TargetHeadline>
        <TargetDescription>(복수 선택 가능)</TargetDescription>
      </TextWrapper>

      <BoxWrapper>
        {selectTarget.map((val) => (
          <SelectBox
            key={val.id}
            text={val.text}
            isSelected={val.isSelected}
            onClick={() => toggleSelection(val.id)}
          />
        ))}
      </BoxWrapper>

      <Link to="/test">
        <Button>피부진단 시작</Button>
      </Link>
    </TargetWrapper>
  );
}

const TargetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 144rem;
  color: ${({ theme }) => theme.colors.w01};
  background-color: ${({ theme }) => theme.colors.b01};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const TargetHeadline = styled.p`
  color: ${({ theme }) => theme.colors.w01};
  ${({ theme }) => theme.fonts.M3_headline_large};
`;

const TargetDescription = styled.p`
  font-size: 2rem;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 53px;
`;

const Button = styled.button`
  width: 25.4rem;
  height: 7rem;
  border-radius: 10rem;
  margin-top: 93px;
  margin-bottom: 113px;

  background: #fff;
  box-shadow: 0px 4px 25px -6px rgba(0, 0, 0, 0.25);
  font-size: 2.4rem;
`;

export default Target;
