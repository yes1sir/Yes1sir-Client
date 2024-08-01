import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@/assets/svgs/arrow_back.svg?react";
import styled from "styled-components";

export default function Backspace() {
  const nav = useNavigate();

  return (
    <BackWrapper>
      <BackBtn role="button" onClick={() => nav(-1)}>
        <ArrowBackIcon />
      </BackBtn>
    </BackWrapper>
  );
}

const BackWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-left: 50px;
  padding-top: 23px;
`;

const BackBtn = styled.div`
  cursor: pointer;
`;
