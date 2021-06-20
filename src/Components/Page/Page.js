import React from "react";
import Menu from "../../Menu/Menu";
import { StyledPageContainer, StyledPageTitle } from "./Styled";

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
