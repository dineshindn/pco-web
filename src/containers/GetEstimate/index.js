import { Button, Col, Row } from "antd"
import styled from "styled-components"
import * as palette from '../../styles/variables';
import BannerImg from '../../images/GetEstimate.png'
import { useNavigate } from "react-router-dom";

export const GetEstimatePage = () => {

  let navigate = useNavigate();

  return(
    <Container>
      <Row>
        <Col span={11} style={{display: "flex", alignItems: "center"}}>
          <ContentContainer>
            <h2>Get Quote in 3 Simple Steps</h2>
            <ul className="listWrapper">
              <li>Log on to the portal</li>
              <li>Fill the product details</li>
              <li>Get Quote Instantly</li>
            </ul>
            <Button type="primary" className="primaryBtn" onClick={() => {sessionStorage.removeItem('token'); sessionStorage.removeItem('userId'); navigate('/signin')}}>Get estimate now</Button>
          </ContentContainer>
        </Col>
        <Col span={13} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <div>
            <img src={BannerImg} alt="home" />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

const Container = styled.section`
  padding: 20px 20px 40px 66px;
  margin-right: 8%;
  width: 100%;
`;

const ContentContainer = styled.div`
  max-width: 443px;
  margin-right: 20px;
  h2 {
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    color: ${palette.PRIMARY_BLUE};
    margin-bottom: 16px;
  }
  .listWrapper {
    font-family: ${palette.FONT_FAMILY};
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 38px;
    color: ${palette.TEXT_COLOR};
    margin-left: 24px;
    list-style: bullets;
    li {
      padding: 2px 0px;
    }
  }
  .primaryBtn {
    margin-top: 30px;
    padding: 12px 35px;
  }
`;
