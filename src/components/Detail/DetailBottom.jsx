import styled from "styled-components";
import PropTypes from "prop-types";

function DetailBottom({ reviews, onDelete, onEdit }) {
  return (
    <DetailBottomWrapper>
      {reviews.map((review, index) => (
        <DetailBottomContainer key={index}>
          <DetailBottomTop>
            <LeftBox>
              <LeftTopBox>
                <UserName>{review.userName}</UserName>
                <ScoreData>평점: {review.score}</ScoreData>
              </LeftTopBox>
              <PostDate>{review.date}</PostDate>
            </LeftBox>
            <BtnBox>
              <Btn onClick={() => onEdit(index)}>수정</Btn>
              <Btn onClick={() => onDelete(index)}>삭제</Btn>
            </BtnBox>
          </DetailBottomTop>
          <TextArea>
            {<p>{review.text}</p>}
            {review.image && <img src={review.image} alt="Review" />}
          </TextArea>
        </DetailBottomContainer>
      ))}
    </DetailBottomWrapper>
  );
}

DetailBottom.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      image: PropTypes.string,
      date: PropTypes.string,
      userName: PropTypes.string,
      score: PropTypes.number,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default DetailBottom;

const DetailBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 12rem;
`;

const DetailBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 120.4rem;
  height: auto;
  margin-bottom: 2.4rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 2.4rem;
`;

const DetailBottomTop = styled.div`
  display: flex;
  gap: 90rem;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LeftTopBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UserName = styled.p`
  color: ${({ theme }) => theme.colors.b01};
  ${({ theme }) => theme.fonts.M3_name_small};
`;

const PostDate = styled.p`
  color: ${({ theme }) => theme.colors.g06};
  ${({ theme }) => theme.fonts.M3_date_small};
`;

const ScoreData = styled.p`
  color: ${({ theme }) => theme.colors.y01};
  ${({ theme }) => theme.fonts.M3_name_small};
`;

const BtnBox = styled.div`
  display: flex;
  gap: 1.7rem;
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.6rem;
  height: 4rem;
  border-radius: 10px;
  border: 1px solid var(--Color-4, #8e8aac);
  background-color: ${({ theme }) => theme.colors.g07};
  cursor: pointer;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100rem;
  height: auto;
  gap: 1rem;

  p {
    ${({ theme }) => theme.fonts.M3_modal_small};
  }

  img {
    width: 40rem;
    height: 20rem;
    border-radius: 10px;
    object-fit: cover;
  }
`;
