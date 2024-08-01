import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import HomeLoginTitle from "@/components/HomeLogin/HomeLoginTitle";
import HomeLoginMbti from "@/components/HomeLogin/HomeLoginMbti";
import HomeLoginBtn from "@/components/common/HomeLoginBtn";
import mbtiCircles from "@/constants/HomeLogout/mbtiCircles";
import HomeLoginMbtiContent from "@/components/HomeLogin/HomeLoginMbtiContent";
import mbtiContent from "@/constants/HomeLogin/mbtiContent";
import mbtiTitle from "@/constants/HomeLogin/mbtiTitle";

function HomeLogin() {
  const userName = "유승빈";
  const skinType = "DRPT";
  const mbtiCircle = mbtiCircles.find((circle) => circle.text === skinType);
  const textColor = mbtiCircle?.color;
  const initialMbtiCircle = mbtiCircle || mbtiCircles[0];
  const initialIndex = mbtiCircles.findIndex(
    (circle) => circle.text === skinType
  );

  const [selectedMbtiCircle, setSelectedMbtiCircle] =
    useState(initialMbtiCircle);
  const [mbtiContentText, setMbtiContentText] = useState(mbtiContent[skinType]);
  const [mbtiContentTitle, setMbtiContentTitle] = useState(mbtiTitle[skinType]);
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

  const navigate = useNavigate();

  useEffect(() => {
    setSelectedMbtiCircle(mbtiCircles[initialIndex]);
    setMbtiContentText(mbtiContent[skinType]);
    setMbtiContentTitle(mbtiTitle[skinType]);
    setSelectedIndex(initialIndex);
  }, [initialIndex, skinType]);

  const handleMbtiClick = (circle, index) => {
    const isSelected = selectedIndex === index;
    setSelectedMbtiCircle(isSelected ? null : circle);
    setMbtiContentText(isSelected ? "" : mbtiContent[circle.text]);
    setMbtiContentTitle(isSelected ? "" : mbtiTitle[circle.text]);
    setSelectedIndex(isSelected ? null : index);
  };

  const handleBtnClick = () => {
    navigate("/Test");
  };

  const content = selectedIndex !== null && selectedMbtiCircle && (
    <HomeLoginMbtiContent
      $bgColor={selectedMbtiCircle?.color}
      content={mbtiContentText}
      title={mbtiContentTitle}
    />
  );

  return (
    <HomeLoginWrapper>
      <HomeLoginTitle
        name={userName}
        skinType={skinType}
        textColor={textColor}
      />
      <HomeLoginBtn
        backgroundColor="#42A5C4"
        color="#FFF"
        text="다시 진단받기"
        onClick={handleBtnClick}
      />
      <HomeLoginMbti
        onMbtiClick={handleMbtiClick}
        selectedIndex={selectedIndex}
        selectedMbtiCircle={selectedMbtiCircle}
        content={content}
      />
    </HomeLoginWrapper>
  );
}

export default HomeLogin;

const HomeLoginWrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 6.5rem;
  width: 144rem;
  height: 170.3rem;
  background-image: url("src/assets/images/bg.png");
  background-size: cover;
`;
