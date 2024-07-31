import { css } from "styled-components";

const colors = {
  b01: "#2E2856",

  w01: "#FFF",

  g01: "#C2C2C9",
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
  M3_title_large: css`
    font-family: var(--Title-Large-Font, Roboto);
    font-size: var(--Title-Large-Size, 22px);
    font-style: normal;
    font-weight: 400;
    line-height: var(--Title-Large-Line-Height, 28px); /* 127.273% */
    letter-spacing: var(--Title-Large-Tracking, 0px);
  `,
  M3_content_small: css`
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  `,
  M3_content_normal: css`
    font-family: Inter;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 4.5px;
  `,
};

const theme = {
  colors,
  fonts,
};

export default theme;
