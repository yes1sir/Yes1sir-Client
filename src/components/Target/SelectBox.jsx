import styled from "styled-components";
import CheckBlankIcon from "@/assets/svgs/check_blank.svg?react";
import CheckIcon from "@/assets/svgs/check.svg?react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function SelectBox({ text }) {
  const [toggle, setToggle] = useState(false);

  return (
    <BoxWrapper onClick={() => setToggle(!toggle)}>
      {toggle ? <CheckIcon /> : <CheckBlankIcon />}
      <BoxText>{text}</BoxText>
    </BoxWrapper>
  );
}

const BoxWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 78.5rem;
  height: 9.6rem;
  border-radius: 10px;
  padding-left: 74px;

  background-color: ${({ theme }) => theme.colors.w02};

  color: ${({ theme }) => theme.colors.b01};
`;

const BoxText = styled.p`
  margin-left: 43px;
  font-size: 2rem;
`;

SelectBox.propTypes = {
  text: PropTypes.string.isRequired,
};
