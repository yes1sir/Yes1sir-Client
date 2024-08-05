import { styled } from "styled-components";
import PropTypes from "prop-types";

DetailRecommendBtn.propTypes = {
  text: PropTypes.string.isRequired,
  $bgColor: PropTypes.string.isRequired,
};

function DetailRecommendBtn({ text, $bgColor }) {
  return (
    <DetailRecommendBtnBox $bgColor={$bgColor}>{text}</DetailRecommendBtnBox>
  );
}

export default DetailRecommendBtn;

const DetailRecommendBtnBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13rem;
  height: 4rem;
  border-radius: 100px;
  background-color: ${({ $bgColor }) => $bgColor};
  color: ${({ theme }) => theme.colors.w01};
`;
