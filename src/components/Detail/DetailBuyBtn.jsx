import { styled } from "styled-components";
import PropTypes from "prop-types";

DetailBuyBtn.propTypes = {
  text: PropTypes.string.isRequired,
};

function DetailBuyBtn({ text }) {
  return <DetailBuyBtnBox>{text}</DetailBuyBtnBox>;
}

export default DetailBuyBtn;

const DetailBuyBtnBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 49.3rem;
  height: 6rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.b01};
  color: ${({ theme }) => theme.colors.w01};
`;
