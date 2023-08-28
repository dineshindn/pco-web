import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const StickyNav = () => {
  return(
    <NavLinksWrapper>
      <NavLinkItem>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}><span></span></NavLink>
      </NavLinkItem>
      <NavLinkItem>
        <NavLink to="/services"><span></span></NavLink>
      </NavLinkItem>
      <NavLinkItem>
        <NavLink to="/benefits"><span></span></NavLink>
      </NavLinkItem>
      <NavLinkItem>
        <NavLink to="/why-pco"><span></span></NavLink>
      </NavLinkItem>
      <NavLinkItem>
        <NavLink to="/methodology"><span></span></NavLink>
      </NavLinkItem>
      <NavLinkItem>
        <NavLink to="/tiers"><span></span></NavLink>
      </NavLinkItem>
      <NavLinkItem>
        <NavLink to="/get-estimate"><span></span></NavLink>
      </NavLinkItem>
      <NavLinkItem>
        <NavLink to="/contact-us"><span></span></NavLink>
      </NavLinkItem>
    </NavLinksWrapper>
  )
}

const NavLinksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: sticky;
  top: 50%;
  right: 6%;
  transform: translateY(-50%);
  z-index: 2;
`;

const NavLinkItem = styled.li`
  .active {
    border: 1px solid rgba(0, 0, 0, 0.89);
    padding: 5px;
    border-radius: 100%;
    span {
      background: rgba(61, 61, 62, 0.94);
    }
  }
  a {
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    span {
      color: rgba(61, 61, 62, 0.94);
      width: 7px;
      height: 7px;
      display: inline-block;
      background: rgba(61, 61, 62, 0.32);
      border-radius: 100%;
    }
  }
`;
