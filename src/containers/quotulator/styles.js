import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const ImageSection = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #DAE1ED;
  padding: 16px;
  img {
    width: 226px;
    height: 226px;
  }
  span {
    font-weight: 500;
    font-size: 32px;
    letter-spacing: -0.045em;
    text-transform: capitalize;
    color: #385683;
  }
`;

export const SliderImg = styled.div`
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    overflow: hidden;
  }
  img {
    width: -webkit-fill-available;
    height: 200px;
    object-fit: contain;
    background: #fff;
  }
`;

export const FormContainer = styled.div`
  height: 100%;
  padding: 16px 28px;
  .radioIcon {
    text-align: left;
    svg {
      width: 24px;
      height: 24px;
    }
  }
  .radioLevelBtn {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 16px;
    .ant-radio-button-wrapper {
      font-weight: 500;
      font-size: 16px !important;
      line-height: 22px;
      text-align: center;
      letter-spacing: -0.045em;
      text-transform: capitalize;
      color: #A1AAB4;
      display: flex;
      align-items: center;
      flex: 1;
      border-radius: 10px !important;
      overflow: hidden;
      height: 100%;
      padding: 20px;
      border: 1px solid #DBE2F1 !important;
      text-align: left;
    }
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
      border-color: #466BA4 !important;
      color: #282F3D !important;
      background: linear-gradient(260.38deg, #F5F8FF 1.71%, #E8EDF7 99.61%) !important;
      .radioIcon {
        svg path {
          fill: #466BA4;
        }
      }
    }
    .ant-radio-button-wrapper:not(:first-child)::before {
      background-color: #A6A6A6 !important;
    }
  }
  .radioGrpBtn {
    .ant-radio-wrapper {
      font-weight: 500;
      font-size: 16px !important;
      line-height: 19px;
      letter-spacing: -0.045em;
      text-transform: capitalize;
      color: #A6A6A6;
      padding: 12.5px 10px;
      width: 100%;
    }
    .ant-radio-wrapper .ant-radio-inner {
      width: 22px;
      height: 22px;
    }
    .ant-radio-wrapper .ant-radio-inner::after {
      background-color: #466BA4;
      width: 22px;
      height: 22px;
      margin-block-start: -11px;
      margin-inline-start: -11px;
    }
    .ant-radio-wrapper .ant-radio-checked .ant-radio-inner {
      border-color: #466BA4;
      background-color: #FFFFFF;
    }
    .ant-radio-wrapper-checked {
      color: #0E1521;
    }
  }
  .calculateBtn {
    .ant-form-item-control-input-content {
      display: flex;
      justify-content: flex-end;
      .ant-btn {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        gap: 12px;
        height: 40px;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: #385683;
        border-color: #385683;
      }
      .ant-btn-default:disabled {
        color: #A6A6A6;
        border-color: #A6A6A6;
      }
    }
  }
`;

export const ResultsFormContainer = styled.div`
  padding: 16px;
  height: 100%;
  border-left: 1px solid rgba(70, 107, 164, 0.2);
  .resultsForm {
    border-radius: 4px;
    margin: 15px 0px;
  }
  .headerRow {
    display: flex;
    align-items: center;
    h2 {
      flex: 3.5;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
    }
    h3 {
      flex: 1;
      text-align: center;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: #76859C;
    }
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  h2 {
    flex: 3.5;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
  }
  h3 {
    flex: 1;
    text-align: center;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #76859C;
  }
`;

export const ResultsList = styled.div`
  display: flex;
  gap: 12px;
  .circleBtn {
    min-width: 30px;
    max-width: 30px;
    height: 30px;
    border: 1px solid #DBE2F1;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    color: #51565E;
    span {
      margin-top: -4px;
    }
    &:hover, &:focus, &:active {
      color: #51565E;
      border-color: #466BA4;
    }
  }
  .ant-input-number-disabled {
    background: ${palette.WHITE_COLOR};
  }
  .ant-input-number {
    width: 54px;
    border: 1px solid #DBE2F1;
    border-radius: 10px;
    text-align: center;
    &:hover, &:focus, &:active {
      color: #51565E;
      border-color: #466BA4;
    }
  }
`;

export const FormWrapper = styled.div`
  margin: 18px 0px;
  .ant-row {
    margin-bottom: 16px;
  }
  label {
    font-weight: 500;
    font-size: 16px;
    color: #76859C;
  }
`;

export const TotalCostWrapper = styled.div`
  border: 1px solid #DBE2F1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 24px;
  gap: 10px;
  width: 100%;
  margin: 12px 0px;
  img {
    width: 24px;
    height: 24px;
  }
  h5 {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #454D55;
  }
  h4 {
    font-weight: 700;
    font-size: 43.0199px;
    line-height: 150%;
    color: #385683;
  }
`;
