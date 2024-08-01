import { useState } from "react";
import styled from "styled-components";
import CheckBlankIcon from "@/assets/svgs/check_blank.svg?react";
import CheckIcon from "@/assets/svgs/check.svg?react";
import PropTypes from "prop-types";

export default function SelectBox({ text, onClick }) {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(true);
    onClick();
  };

  return (
    <BoxWrapper onClick={handleClick}>
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
  cursor: pointer;
`;

const BoxText = styled.p`
  margin-left: 43px;
  padding-right: 2rem;
  font-size: 2rem;
`;

SelectBox.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
