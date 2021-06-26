import React from "react";
import Menu from "../../Menu/Menu";
import { StyledPageContainer, StyledPageTitle } from "./Styled";

/**
 * Page component
 * @param {object} props
 * @param {string} props.title page title
 * @param {object} props.children
 * @returns
 */
const Page = (props) => {
  return (
    <main>
      <Menu></Menu>
      <StyledPageContainer>
        <StyledPageTitle>{props.title}</StyledPageTitle>
        {props.children}
      </StyledPageContainer>
    </main>
  );
};

export default Page;
