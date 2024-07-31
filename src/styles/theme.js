import { css } from "styled-components";

const colors = {
  b01: "#2E2856",

  w01: "#FFF",
};

const fonts = {
  M3_headline_large: css`
    font-family: var(--Headline-Large-Font, Roboto);
    font-size: var(--Headline-Large-Size, 32px);
    font-style: normal;
    font-weight: 400;
    line-height: var(--Headline-Large-Line-Height, 40px); /* 125% */
    letter-spacing: var(--Headline-Large-Tracking, 0px);
  `,
  M3_headline_normal: css`
    font-family: Inter;
    font-size: 35px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 3.5px;
  `,
};

const theme = {
  colors,
  fonts,
};

export default theme;
