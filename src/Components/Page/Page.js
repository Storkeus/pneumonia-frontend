import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectCount } from "../../Redux/Slices/Counter";
import Menu from "../../Menu/Menu";
import { StyledPageContainer, StyledPageTitle } from "./Styled";

const Page = (props) => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  // const [count,setCount]=React.useState(0);
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
