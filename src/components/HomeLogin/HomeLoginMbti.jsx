import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import mbtiCircles from "@/constants/HomeLogout/mbtiCircles";

const HomeLoginMbti = ({ onMbtiClick, selectedIndex, content }) => {
  return (
    <HomeLogoutMbtiWrapper>
      <HomeLogoutMbtiContainer>
        {mbtiCircles.map((circle, index) => (
          <React.Fragment key={index}>
            <Circle
              color={circle.color}
              onClick={() => onMbtiClick(circle, index)}
            >
              {circle.text}
            </Circle>
            {selectedIndex !== null &&
              index % 4 === 3 &&
              Math.floor(selectedIndex / 4) === Math.floor(index / 4) && (
                <ContentWrapper>{content}</ContentWrapper>
              )}
          </React.Fragment>
        ))}
      </HomeLogoutMbtiContainer>
    </HomeLogoutMbtiWrapper>
  );
};

HomeLoginMbti.propTypes = {
  onMbtiClick: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number,
  content: PropTypes.node,
};

export default HomeLoginMbti;

const HomeLogoutMbtiWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeLogoutMbtiContainer = styled.div`
  display: flex;
  width: 144rem;
  padding: 0 30rem;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.563rem;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18.4543rem;
  height: 18.4543rem;
  border-radius: 50%;
  border: 6px solid ${(props) => props.color};
  ${({ theme }) => theme.fonts.M3_content_large};
  color: ${({ theme }) => theme.colors.b01};
  background-color: ${({ theme }) => theme.colors.g01};
  cursor: pointer;
  margin: 0.2815rem;
`;

const ContentWrapper = styled.div`
  margin-top: 0.563rem;
  text-align: center;
`;
