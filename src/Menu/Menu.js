import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faBars,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../Redux/Slices/User";
import {
  StyledMenuNav,
  StyledMenuList,
  StyledMenuItem,
  StyledMenuLink,
  StyledMenuLinkToProfile,
  StyledMenuLogoutButton,
  StyledButtonContainer,
  StyledMenuOpenButton,
} from "./Styled";
import { PERMISSIONS_ADMIN } from "../Common/Permissions";

/**
 * Menu component
 * @param {object} props
 * @returns {object} \<StyledMenuNav\>
 */
const Menu = (props) => {
  const dispatch = useDispatch();

  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const user = useSelector(selectUser);

  const logoutHandler = () => {
    dispatch(logout());
  };

  const openMenuHandler = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  return (
    <StyledMenuNav>
      <StyledMenuOpenButton title="Wyloguj" onClick={openMenuHandler}>
        <FontAwesomeIcon icon={faBars} />
      </StyledMenuOpenButton>

      <StyledMenuList data-expanded={isMenuExpanded ? "true" : "false"}>
        <StyledMenuItem>
          <StyledMenuLink to="/patients">Lista pacjentów</StyledMenuLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledMenuLink to="/patients/add">Dodaj pacjenta</StyledMenuLink>
        </StyledMenuItem>
        {user.permissions === PERMISSIONS_ADMIN &&
          <>
            <StyledMenuItem>
              <StyledMenuLink to="/users">Lista użytkowników</StyledMenuLink>
            </StyledMenuItem>
            <StyledMenuItem>
              <StyledMenuLink to="/users/add">Dodaj użytkownika</StyledMenuLink>
            </StyledMenuItem>
            <StyledMenuItem>
              <StyledMenuLink to="/update-model">Aktualizuj model</StyledMenuLink>
            </StyledMenuItem>
          </>
        }

      </StyledMenuList>
      <StyledButtonContainer>
        <StyledMenuLinkToProfile to="/profile">
          <FontAwesomeIcon icon={faUserAlt} />
        </StyledMenuLinkToProfile>
        <StyledMenuLogoutButton title="Wyloguj" onClick={logoutHandler}>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </StyledMenuLogoutButton>
      </StyledButtonContainer>
    </StyledMenuNav>
  );
};

export default Menu;
