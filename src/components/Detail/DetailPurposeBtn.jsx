import { styled } from "styled-components";
import PropTypes from "prop-types";

DetailPurposeBtn.propTypes = {
  text: PropTypes.string.isRequired,
};

function DetailPurposeBtn({ text }) {
  return <DetailPurposeBtnBox>{text}</DetailPurposeBtnBox>;
}

export default DetailPurposeBtn;

const DetailPurposeBtnBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13rem;
  height: 4rem;
  border-radius: 100px;
  background-color: black;
  color: ${({ theme }) => theme.colors.w01};
`;
