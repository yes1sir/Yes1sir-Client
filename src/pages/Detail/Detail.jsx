import styled from "styled-components";

import DetailTop from "@/components/Detail/DetailTop";

function Detail() {
  return (
    <DetailWrapper>
      <DetailTop />
    </DetailWrapper>
  );
}

export default Detail;

const DetailWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 144rem;
  height: 177.2rem;
  background-color: ${({ theme }) => theme.colors.g01};
`;
