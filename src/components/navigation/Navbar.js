import { Button } from "antd";
import { Link, NavLink, useNavigate } from "react-router-dom"
import styled from "styled-components"
import * as palette from '../../styles/variables';
import Logo from "../../images/TextLogo.svg"

export const Navbar = () => {

  let navigate = useNavigate();

  return (
    <NavbarContainer>
      <Link to="/" className="logoWrapper">
        <img src={Logo} alt="logo" />
      </Link>
      <NavLinksWrapper>
        <NavLinkItem>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>PCO Services</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/benefits" className={({ isActive }) => isActive ? 'active' : ''}>Benefits of Cost Estimation</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/why-pco" className={({ isActive }) => isActive ? 'active' : ''}>Why PCO</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/methodology" className={({ isActive }) => isActive ? 'active' : ''}>Methodology & Tools</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/tiers" className={({ isActive }) => isActive ? 'active' : ''}>3 Tiers of Cost Estimation</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/get-estimate" className={({ isActive }) => isActive ? 'active' : ''}>Get Quote</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <Button type="primary" className="primaryBtn" onClick={() => navigate("/contact-us")}>Contact Us</Button>
        </NavLinkItem>
      </NavLinksWrapper>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 50px;
  height: 84px;
  position: sticky;
  left: 0;
  top: 0px;
  right: 0;
  background: ${palette.APP_BACKGROUND_COLOR};
  z-index: 2;
  .logoWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 317px;
  }
`;

const NavLinksWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 22px;
`;

const NavLinkItem = styled.li`
  text-align: center;
  line-height: 20px;
  position: relative;
  a {
    text-decoration: none;
    color: ${palette.PRIMARY_BLUE};
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.01em;
    padding-bottom: 2px;
    text-align: center;
  }
  .active::after {
    content: '';
    display: block;
    width: 46px;
    height: 2px;
    background: ${palette.PRIMARY_BLUE};
    position: absolute;
    position: absolute;
    left: 50%;
    bottom: -8px;
    transform: translateX(-50%);
  }
  .primaryBtn {
    height: 46px;
    padding: 12px 28px;
    font-size: 14px !important;
    font-weight: 600 !important;
  }
`;
