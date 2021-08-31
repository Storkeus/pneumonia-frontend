import { COLOR_LIGHT, COLOR_SPECIAL, COLOR_DARK } from "../Const";
import styled from "styled-components";
import { Link } from "react-router-dom";

const menuHeight = "7.5rem";

export const StyledMenuNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 0 5rem;
  font-size: 2rem;
  height: ${menuHeight};
  background-color: ${COLOR_DARK};

  @media (max-width: ${1199 / 16}rem) {
    font-size: 1.7rem;
  }

  @media (max-width: ${991 / 16}rem) {
    justify-content: flex-end;
    border-bottom: 0.2rem solid ${COLOR_SPECIAL};
    padding: 0 1.5rem;
  }
`;

export const StyledMenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${991 / 16}rem) {
    flex-direction: column;
    align-items: flex-start;
    width: 25rem;
    position: absolute;
    left: 0;
    top: ${menuHeight};
    z-index: 100;
    background-color: ${COLOR_DARK};
    padding: 1rem 0;
    transform: translateX(-100%);
    transition: transform 200ms;

    -webkit-box-shadow: 7px 10px 20px -13px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 7px 10px 20px -13px rgba(0, 0, 0, 0.75);
    box-shadow: 7px 10px 20px -13px rgba(0, 0, 0, 0.75);

    &[data-expanded="true"] {
      transform: translateX(0);
    }
  }
`;

export const StyledMenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${991 / 16}rem) {
    width: 100%;
    text-align: left;
    padding: 0.5rem 0;
    // border-bottom:.1rem solid ${COLOR_SPECIAL};
  }
`;

export const StyledMenuLink = styled(Link)`
  color: ${COLOR_LIGHT};
  text-decoration: none;

  @media (max-width: ${991 / 16}rem) {
    width: 100%;
    text-align: left;
    padding: 1rem 0.5rem 1rem 1.5rem;
    display: flex;
    align-items: center;
  }

  &:hover {
    color: ${COLOR_SPECIAL};
  }

  &:focus,
  &:active,
  &focus-visible {
    outline: 0.1rem dashed ${COLOR_LIGHT};
    outline-offset: 0.5rem;
  }
`;

const StyledMenuButton = styled.button`
  color: ${COLOR_LIGHT};
  background-color: transparent;
  border: none;
  font-size: 2.5rem;

  @media (max-width: ${1199 / 16}rem) {
    font-size: 2.1rem;
  }

  &:hover {
    cursor: pointer;
    color: ${COLOR_SPECIAL};
  }

  &:focus,
  &:active,
  &focus-visible {
    outline: 0.1rem dashed ${COLOR_LIGHT};
    outline-offset: 0.5rem;
  }
`;

export const StyledMenuLogoutButton = styled(StyledMenuButton)`
  margin: 0 0 0 1.5rem;
`;

export const StyledMenuOpenButton = styled(StyledMenuButton)`
  margin: 0 auto 0 0;

  @media (min-width: ${992 / 16}rem) {
    display: none;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5px;
`;

export const StyledMenuLinkToProfile = styled(StyledMenuLink)`
  margin: 0 0 0.5rem 1rem;
`;
