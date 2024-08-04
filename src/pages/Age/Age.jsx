import { Link } from "react-router-dom";
import styled from "styled-components";
import Backspace from "../../components/common/Backspace";
import SelectDate from "../../components/Age/SelectDate";

function Age() {
  return (
    <AgeWrapper>
      <Backspace />
      <AgeText>생년월일을 기입해주세요</AgeText>
      <SelectDate />
      <Link to="/target">
        <ContinueBtn>계속하기</ContinueBtn>
      </Link>
    </AgeWrapper>
  );
}

const AgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 144rem;
  height: 102.4rem;
  background-color: ${({ theme }) => theme.colors.b01};
`;

const AgeText = styled.div`
  margin-top: 130px;
  ${({ theme }) => theme.fonts.M3_headline_large};
  color: ${({ theme }) => theme.colors.w01};
`;

const ContinueBtn = styled.button`
  width: 25.4rem;
  height: 7rem;
  border-radius: 100px;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.b01};
  background-color: ${({ theme }) => theme.colors.w02};
`;

export default Age;
