import styled from "styled-components";
import PropTypes from "prop-types";

export default function ProgressIndicator({ page, lastPage }) {
  return (
    <ProgressWrapper>
      <ProgressBar>
        <Progress style={{ width: 75 * (page + 1) }} />
      </ProgressBar>
      {page + 1} / {lastPage}
    </ProgressWrapper>
  );
}

const ProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  margin-top: 4.3rem;
  margin-bottom: 6.7rem;

  color: ${({ theme }) => theme.colors.w01};
  ${({ theme }) => theme.fonts.M3_title_large};
`;

const ProgressBar = styled.div`
  width: 90rem;
  height: 1.8rem;
  border-radius: 6.4rem;

  background-color: ${({ theme }) => theme.colors.g04};
`;

const Progress = styled.div`
  width: ${(props) => props.step};
  height: 1.8rem;
  border-radius: 6.4rem;

  background-color: ${({ theme }) => theme.colors.w02};
`;

ProgressIndicator.propTypes = {
  page: PropTypes.number,
  lastPage: PropTypes.number,
};
