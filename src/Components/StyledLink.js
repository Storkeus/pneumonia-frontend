import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { COLOR_LIGHT, COLOR_SPECIAL } from "../Const";

export const StyledLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
background-color: ${COLOR_SPECIAL};
color: ${COLOR_LIGHT};
border-color: #fff;
font-size: 2.2rem;
border: none;
padding: 0.5rem 1.3rem;
text-decoration:none;
width:fit-content;
margin:0 auto;
`;

