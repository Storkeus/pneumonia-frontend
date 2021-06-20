import styled from "styled-components";
import { COLOR_CONTENT_BACKGROUND, COLOR_DARK, COLOR_LIGHT, COLOR_SPECIAL } from "../../Const";

export const StyledPagination=styled.div`
display:flex;
align-items:center;
justify-content:center;
`;

export const StyledPaginationButton=styled.button`
border:none;
background:${COLOR_DARK};
color:${COLOR_LIGHT};
text-transform:uppercase;
font-weight:700;
letter-spacing:.1rem;
display:flex;
align-items:center;
justify-content: center;
padding:.5rem .9rem .5rem 1.1rem;
font-size:1.3rem;


&[data-hidden="true"]
{
  visibility: hidden;
}

&:hover
{
  cursor: pointer;
}

&:focus,&:active,&:focus-visible{
      outline: .2rem solid ${COLOR_SPECIAL};
      outline-offset:.1rem;
  }
`; 

export const StyledPageInfo=styled.div`
text-align: center;
margin:0 1rem;
`;