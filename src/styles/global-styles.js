import { createGlobalStyle } from 'styled-components';
// Abstracts
import * as palette from './variables';
import BannerImg from '../images/HomeImg.png'

export const GlobalStyle = createGlobalStyle`
  @-ms-viewport {
    width: device-width;
  }
  html {
    box-sizing: border-box;
    font-size: 13pt;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }

  body {
    -ms-overflow-style: scrollbar;
    line-height: 1;
    -webkit-text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    background-color: ${palette.WHITE_COLOR} !important;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html, body, div, span, applet, object,
  iframe, h1, h2, h3, h4, h5, h6, p, blockquote,
  pre, a, abbr, acronym, address, big, cite,
  code, del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var, b,
  u, i, center, dl, dt, dd, ol, ul, li, fieldset,
  form, label, legend, table, caption, tbody,
  tfoot, thead, tr, th, td, article, aside,
  canvas, details, embed, figure, figcaption,
  footer, header, hgroup, menu, nav, output, ruby,
  section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after, q:before, q:after {
    content: none;
  }
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  input, select, textarea {
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
  }
  body, input, select, textarea, button {
    font-family: ${palette.FONT_FAMILY};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.65;
  }
  section {
    position: relative;
  }
  a {
    -moz-transition: color 0.2s ease-in-out;
    -webkit-transition: color 0.2s ease-in-out;
    -ms-transition: color 0.2s ease-in-out;
    transition: color 0.2s ease-in-out;
    text-decoration: underline;
  }
  strong {
    font-weight: 600;
  }

  h1,h2,h3,h4,h5,h6 {
    line-height: 1.25;
    font-family: ${palette.FONT_FAMILY};
  }

  h1 {
    font-size: 36px;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 26px;
  }

  h4 {
    font-size: 20px;
  }

  img {
    width: 100%;
  }

  p {
    font-family: ${palette.CONTENT_FONT_FAMILY};
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    color: ${palette.WHITE_COLOR};
  }

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #8f96a6;
    border-radius: 10px;
  }

  .disabledInput.ant-input-disabled {
    color: rgba(0, 0, 0, 0.6) !important;
    background-color: #e0e8f8 !important;
    border-color: #3e7af3 !important;
  }

  .outlinedBtn {
    background: ${palette.WHITE_COLOR} !important;
    border-color: ${palette.PRIMARY_COLOR} !important;
    font-family: ${palette.FONT_FAMILY} !important;
    font-weight: 700 !important;
    font-size: 18px !important;
    border-radius: 12px !important;
    color:  ${palette.PRIMARY_COLOR} !important;
    &:hover, &:active, &:focus {
      border-color: ${palette.PRIMARY_COLOR} !important;
      color:  ${palette.PRIMARY_COLOR} !important;
    }
  }

  .primaryBtn {
    height: 54px;
    background: ${palette.PRIMARY_COLOR} !important;
    border-radius: 0px !important;
    color:  ${palette.WHITE_COLOR} !important;
    font-family: ${palette.FONT_FAMILY} !important;
    font-weight: 500 !important;
    font-size: 16px !important;
    &:hover, &:active, &:focus {
      background: ${palette.PRIMARY_COLOR} !important;
      color:  ${palette.WHITE_COLOR} !important;
    }
  }
  .inputFormItem {
    .ant-form-item-label > label {
      font-family: ${palette.FONT_FAMILY};
      font-weight: 500;
      font-size: 18px !important;
      line-height: 24px;
      color: #0E1521;
      margin-bottom: 10px;
    }
  }

  .estimateSteps {
    width: 115px;
    margin-left: auto;
    .ant-steps-item-icon {
      width: 40px !important;
      height: 40px !important;
      border-radius: 100%;
      border: 6px solid #DBE2F1 !important;
      margin: 0;
      background: #ffffff !important;
    }
    .ant-steps-item-process .ant-steps-item-icon {
      margin-right: -4px;
      background-color: #466BA4 !important;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .ant-steps-item-wait .ant-steps-item-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ant-steps-item-process .ant-steps-item-icon >.ant-steps-icon{
      color: #ffffff !important;
      font-size: 14px !important;
    }
    .ant-steps-item-wait .ant-steps-item-icon >.ant-steps-icon {
      color: #484646;
    }
    .ant-steps-item-finish .ant-steps-item-icon {
      background: #A0B2CE !important;
      margin-right: -4px;
    }
    .ant-steps-item-finish .ant-steps-item-icon >.ant-steps-icon {
      color: #ffffff !important;
      font-size: 14px !important;
    }
    .ant-steps-item-title::after {
      background-color: #DBE2F1 !important;
      top: 10px !important;
      height: 20px !important;
      inset-inline-start: 0% !important;
    }
    .ant-steps-item-wait.ant-steps-item-custom .ant-steps-item-icon >.ant-steps-icon {
      color: #484646;
      font-size: 14px;
    }
    &:not(.ant-steps-label-vertical) .ant-steps-item {
      padding-inline-start: 0px !important;
      margin-left: -4px;
    }
  }

  .inputField {
    height: 46px;
    background: ${palette.APP_BACKGROUND_COLOR};
    border: 1px solid rgba(0, 0, 0, 0.16);
    border-radius: 8px;
    box-shadow: none;
    font-family: ${palette.FONT_FAMILY};
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    color: ${palette.INPUT_COLOR};
    &:hover, &:active, &:focus {
      border: 1px solid rgba(0, 0, 0, 0.16);
    }
    &:focus {
      box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.16);
    }
  }

  .enquireModal {
    .anticon-info-circle svg {
      fill: #cc3300;
    }
    .ant-modal-confirm-title {
      font-family: ${palette.FONT_FAMILY};
      font-style: normal;
      font-weight: 600 !important;
      font-size: 24px !important;
      color: ${palette.INPUT_COLOR} !important;
    }
    .ant-btn-primary {
      background: ${palette.PRIMARY_COLOR} !important;
      color:  ${palette.WHITE_COLOR} !important;
      font-family: ${palette.FONT_FAMILY} !important;
      font-weight: 500 !important;
      &:hover, &:active, &:focus {
        background: ${palette.PRIMARY_COLOR} !important;
        color:  ${palette.WHITE_COLOR} !important;
      }
    }
  }

  .productInput {
    padding: 0px 28px 35px;
    label {
      font-size: 16px;
      font-weight: 600;
      color: ${palette.PRIMARY_BLUE};
      margin-bottom: 8px;
      display: inline-block;
    }
    .ant-input {
      height: 46px;
      background: ${palette.WHITE_COLOR};
      border: 1px solid rgba(0, 0, 0, 0.16);
      border-radius: 12px;
      color: ${palette.PRIMARY_BLUE};
      padding: 12px 16px;
      &:focus {
        border: 1px solid ${palette.PRIMARY_COLOR};
      }
    }
  }
  main {
    width: 100vw;
    height: 100vh !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
  }

  .bottomNavigator {
    position: absolute;
    right: 5%;
    bottom: 12%;
    display: flex;
    align-items: center;
    gap: 16px;
    button {
      background-color: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(10px);
      border: none !important;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 67px;
      height: 47px;
      border-radius: 0px !important;
      box-shadow: none !important;
      img {
        width: 9px;
      }
    }
  }
`;
