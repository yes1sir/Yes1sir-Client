import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import styled from "styled-components";

ReviewModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  review: PropTypes.shape({
    text: PropTypes.string,
    image: PropTypes.string,
  }),
};

function ReviewModal({ onClose, onSubmit, review }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (review) {
      setText(review.text);
      setImage(review.image);
    }
  }, [review]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    onSubmit(text, image);
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <TopBox>
          <Title>후기 작성</Title>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </TopBox>
        <MiddleBox>
          <Text>상품평</Text>
          <Textarea
            placeholder="후기를 작성해주세요"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </MiddleBox>
        <ImageUpload>
          <Text>이미지 첨부</Text>
          <UploadContainer>
            <UploadButton>
              <label htmlFor="image-upload">+</label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </UploadButton>
            {image && <ImagePreview src={image} alt="Uploaded Preview" />}
          </UploadContainer>
        </ImageUpload>
        <SubmitButtonBox>
          <SubmitButton onClick={handleSubmit}>제출하기</SubmitButton>
        </SubmitButtonBox>
      </ModalContent>
    </ModalOverlay>
  );
}

export default ReviewModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 144rem;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  padding: 2.5rem;
  border-radius: 32px;
  width: 110rem;
  height: 80rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.g01};
`;

const TopBox = styled.div`
  display: flex;
  gap: 86rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.b01};
  padding-bottom: 1rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 3rem;
  cursor: pointer;
`;

const MiddleBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2.6rem;
  gap: 2.7rem;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.b01};
  ${({ theme }) => theme.fonts.M3_modal_normal};
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 43.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ImageUpload = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2.7rem;
  gap: 2.7rem;
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.M3_modal_small};
`;

const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UploadButton = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: #f0f0f0;
  border-radius: 20px;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImagePreview = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 20px;
  object-fit: cover;
`;

const SubmitButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25.4rem;
  height: 4rem;
  border-radius: 20px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.g05};
`;
