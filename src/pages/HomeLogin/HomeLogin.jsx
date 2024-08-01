import { useState } from "react";
import styled from "styled-components";
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
  const initialMbtiCircle =
    mbtiCircles.find((circle) => circle.text === skinType) || mbtiCircles[0];
  const [selectedMbtiCircle, setSelectedMbtiCircle] =
    useState(initialMbtiCircle);
  const [mbtiContentText, setMbtiContentText] = useState(mbtiContent[skinType]);
  const [mbtiContentTitle, setMbtiContentTitle] = useState(mbtiTitle[skinType]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleMbtiClick = (circle, index) => {
    if (selectedIndex === index) {
      setSelectedMbtiCircle(null);
      setMbtiContentText("");
      setMbtiContentTitle("");
      setSelectedIndex(null);
    } else {
      setSelectedMbtiCircle(circle);
      setMbtiContentText(mbtiContent[circle.text]);
      setMbtiContentTitle(mbtiTitle[circle.text]);
      setSelectedIndex(index);
    }
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
      />
      <HomeLoginMbti
        onMbtiClick={handleMbtiClick}
        selectedIndex={selectedIndex}
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
