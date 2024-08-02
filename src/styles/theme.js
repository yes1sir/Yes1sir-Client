import { css } from "styled-components";

const colors = {
  b01: "#2E2856",
  b02: "#454545",
  b03: "#42A5C4",

  w01: "#FFF",
  w02: "#EAE7F9",

  g01: "#C2C2C9",
  g02: "#c4c1d8",
  g03: "#8b8b8b",
  g04: "#8E8AAC",
};

const fonts = {
  M3_headline_xlarge: css`
    font-family: var(--Headline-Large-Font, Roboto);
    font-size: var(--Display-Small-Size, 36px);
    font-style: normal;
    font-weight: 600;
    line-height: var(--Headline-Large-Line-Height, 40px); /* 111.111% */
    letter-spacing: var(--Headline-Large-Tracking, 0px);
  `,
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
  M3_title_xlarge: css`
    font-family: Inter;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
  `,
  M3_title_large: css`
    font-family: var(--Title-Large-Font, Roboto);
    font-size: var(--Title-Large-Size, 22px);
    font-style: normal;
    font-weight: 400;
    line-height: var(--Title-Large-Line-Height, 28px); /* 127.273% */
    letter-spacing: var(--Title-Large-Tracking, 0px);
  `,
  M3_title_normal: css`
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 4px;
  `,
  M3_content_large: css`
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3.2px;
  `,
  M3_content_normal: css`
    font-family: Inter;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 4.5px;
  `,
  M3_content_small: css`
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  `,
  M3_content_xsmall: css`
    font-family: var(--Headline-Large-Font, Roboto);
    font-size: 30px;
    font-style: normal;
    font-weight: 300;
    line-height: 45px; /* 150% */
    letter-spacing: var(--Title-Small-Tracking, 0.1px);
  `,
  M3_content_xxsmall: css`
    font-family: var(--Headline-Large-Font, Roboto);
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: var(--Headline-Large-Line-Height, 40px); /* 166.667% */
    letter-spacing: var(--Headline-Large-Tracking, 0px);
  `,
  M3_label_large: css`
    font-family: var(--Label-Large-Font, Roboto);
    font-size: var(--Label-Large-Size, 14px);
    font-style: normal;
    font-weight: 600;
    line-height: var(--Label-Large-Line-Height, 20px); /* 142.857% */
    letter-spacing: var(--Label-Large-Tracking, 0.1px);
  `,
  M3_body_base: css`
    font-family: var(--sds-typography-body-font-family);
    font-size: var(--sds-typography-body-size-medium);
    font-style: normal;
    font-weight: var(--sds-typography-body-font-weight-regular);
    line-height: 140%; /* 22.4px */
  `,
  M3_heading: css`
    font-family: var(--sds-typography-heading-font-family);
    font-size: var(--sds-typography-heading-size-base);
    font-style: normal;
    font-weight: var(--sds-typography-heading-font-weight);
    line-height: 120%; /* 28.8px */
    letter-spacing: -0.48px;
  `,
  M3_detail_large: css`
    font-family: var(--Headline-Large-Font, Roboto);
    font-size: var(--Headline-Large-Size, 32px);
    font-style: normal;
    font-weight: 500;
    line-height: var(--Headline-Large-Line-Height, 40px); /* 125% */
    letter-spacing: var(--Headline-Large-Tracking, 0px);
  `,
  M3_detail_normal: css`
    font-family: var(--Headline-Large-Font, Roboto);
    font-size: var(--Headline-Large-Size, 32px);
    font-style: normal;
    font-weight: 400;
    line-height: var(--Headline-Large-Line-Height, 40px); /* 125% */
    letter-spacing: var(--Headline-Large-Tracking, 0px);
  `,
  M3_detail_xnormal: css`
    font-family: var(--Headline-Large-Font, Roboto);
    font-size: var(--Headline-Large-Size, 32px);
    font-style: normal;
    font-weight: 400;
    line-height: var(--Headline-Large-Line-Height, 40px); /* 125% */
    letter-spacing: var(--Headline-Large-Tracking, 0px);
  `,
  M3_detail_small: css`
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: var(--Headline-Large-Line-Height, 40px); /* 166.667% */
    letter-spacing: var(--Headline-Large-Tracking, 0px);
  `,
};

const theme = {
  colors,
  fonts,
};

export default theme;
