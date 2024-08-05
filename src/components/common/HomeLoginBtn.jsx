import { styled } from "styled-components";
import { homeLoginBtnPropTypes } from "@/types/homeLoginBtnPropTypes";

HomeLoginBtn.propTypes = homeLoginBtnPropTypes;

function HomeLoginBtn({ $bgColor, color, text, onClick }) {
  return (
    <HomeLoginBtnBox
      $backgroundcolor={$bgColor}
      color={color}
      onClick={onClick}
    >
      {text}
    </HomeLoginBtnBox>
  );
}

export default HomeLoginBtn;

const HomeLoginBtnBox = styled.button`
  display: flex;
  width: 21.6rem;
  height: 4.2rem;
  border-radius: 20px;
  padding: 1rem 2.4rem;
  justify-content: center;
  align-items: center;
  background-color: ${({ $backgroundcolor }) => $backgroundcolor};
  color: ${({ color }) => color};
  ${({ theme }) => theme.fonts.M3_title_large};
`;
