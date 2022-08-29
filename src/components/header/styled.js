import styled from 'styled-components';
import { DropDownMenu as DropdownMenuBase } from '../dropdown-menu';

const onMobileView = '@media (max-width: 900px)';

const Header = styled.header`
  color: #ffffff;
  display: flex;
  align-items: center;
  height: 68px;
  background: rgba(37, 41, 51, 0.8);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  ${onMobileView} {
    & {
      background: #252933;
      height: calc(55px + (80 - 55) * ((100vw - 320px) / (900 - 320)));
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 1200px;
  margin: 0 auto;

  @media (max-width: 1251px) {
    & {
      width: 100%;
      margin: 0 3.2em;
    }
  }

  ${onMobileView} {
    & {
      margin: 0 calc(12px + (32 - 12) * ((100vw - 320px) / (900 - 320)));
    }
  }
`;

const PlainLink = styled.a`
  padding-bottom: 0.4em;
  position: relative;
  &:after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    width: 0;
    margin: 0 auto;
    background-color: #8fb4ff;
  }
  &:hover {
    &:after {
      left: 0;
      right: auto;
      width: 100%;
      transition: width 0.4s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
    }
  }
`;

const NavigationLinks = styled.ul`
  display: flex;
  margin-left: auto;
  list-style: none;

  & a {
    color: #ffffff;
    text-decoration: none;    
  }

  & a:hover {
    cursor: pointer;
  }

  & > li {
    flex: 0 0 auto;
  }

  & > li:nth-of-type(n + 2) {
    margin-left: 2.4em;
  }

  ${onMobileView} {
    & {
      display: none;
    }
  }
`;

const SkipLink = styled.a`
  border: 0;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  &:focus,
  &:active {
    background-color: #dfe1e2;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0.6em 1em;
    overflow: visible;
    text-align: center;
    clip: auto;
    z-index: 1;
  }
`;

const Logo = styled.a`
  font-size: 2.0rem;
  font-weight: 600;

  ${onMobileView} {
    font-size: 1.8rem;
  }
`;

const ExpandIconWrapper = styled.span`
  & > svg {
    width: 12px;
    margin-left: 0.2em;
  }
`;

const Submenu = styled.ul`
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  flex-direction: column;
  gap: 1em;
  position: absolute;
  margin-top: 0.8em;
  left: auto;
  z-index: 9999;
  min-width: 150px;
  padding: 1.6em;
  list-style: none;
  background: #2d3340;
`;

const MobileMenu = styled(DropdownMenuBase)`
  display: none;
  margin-left: auto;

  ${onMobileView} {
    & {
      display: flex;
    }
  }
`;

const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Burger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 0.6em;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 30px;
    height: 4px;
    background-color: #ffffff;
    border-radius: 10px;
    transition: all 200ms linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Menu = styled.ul`
  overflow-y: auto;
  overflow-x: hidden;
  list-style: none;
  position: fixed;
  top: calc(45px + (80 - 55) * ((100vw - 320px) / (900 - 320)));
  background: #2d3340;
  left: 0;
  bottom: 0;
  padding: 0;
  width: 100vh;
  z-index: 9;

  & > li {
    display: block;
    padding: 1.2em 1.6em;
    white-space: pre;
    border-top: 1px solid #384359;
    font-size: 1.5rem;

    & > ul {
      list-style: none;
      margin-left: 1em;
      padding: 0;
      
      & > li {
        margin-top: 1em;
      }
    }
  }

  & a {
    text-decoration: none;
  }
`;

export default {
  Header,
  Nav,
  NavigationLinks,
  PlainLink,
  SkipLink,
  Logo,
  ExpandIconWrapper,
  Submenu,
  MobileMenu,
  MenuButton,
  Menu,
  Burger,
};
