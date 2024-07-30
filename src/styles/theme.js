import { css } from "styled-components";

const colors = {
  b01: "#2E2856",

  w01: "#FFF",
  w02: "#EAE7F9",
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
};

const theme = {
  colors,
  fonts,
};

export default theme;
