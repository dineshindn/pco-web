import { Link } from "react-router-dom"
import Instagram from "../../images/Insta.svg"
import Linkedin from "../../images/Linkedin.svg"
import Twitter from "../../images/Twitter.svg"
import styled from "styled-components"
import * as palette from '../../styles/variables';

export const Footer = () => {
  return(
    <FooterContainer>
      <p className="copyrights">© 2023 Product Optimisation Ltd.</p>
      <div style={{display: "flex", alignItems: "center"}}>
        <IntouchTerms>
          {/* <Link to="/">Privacy Policy</Link> */}
          <Link to="/contactUs">Contact Us</Link>
        </IntouchTerms>
        <MediaLinks>
          <a
            className="media-link"
            href="https://www.instagram.com/"
            target="_blank"
            without="true"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="instagram" />
          </a>
          <a
            className="media-link"
            href="https://www.linkedin.com/"
            target="_blank"
            without="true"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="Linkedin" />
          </a>
          <a
            className="media-link"
            href="https://twitter.com/"
            target="_blank"
            without="true"
            rel="noopener noreferrer"
          >
            <img src={Twitter} alt="Twitter" />
          </a>
        </MediaLinks>
      </div>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 40px;
  .copyrights {
    font-family: ${palette.FONT_FAMILY};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: ${palette.PRIMARY_BLUE};
    opacity: 0.7;
  }
`;

const IntouchTerms = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  border-right: 1px solid ${palette.PRIMARY_COLOR};
  padding-right: 25px;
  a {
    text-decoration: none;
    font-family: ${palette.FONT_FAMILY};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: ${palette.PRIMARY_BLUE};
    opacity: 0.7;
  }
`;

const MediaLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding-left: 25px;
  .media-link {
    display: flex;
    img {
      width: 24px;
      height: 24px;
    }
  }
`;
