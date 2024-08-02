import styled from "styled-components";

import DetailTop from "@/components/Detail/DetailTop";
import DetailMiddle from "@/components/Detail/DetailMiddle";

function Detail() {
  return (
    <DetailWrapper>
      <DetailTop />
      <DetailMiddle />
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
