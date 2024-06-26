import styled from "styled-components";
import {
  COLOR_CONTENT_BACKGROUND,
  COLOR_DARK,
  COLOR_LIGHT,
  COLOR_SPECIAL,
} from "../../Const";
import Input from "../Input/Input";
import Select from "../Select/Select";

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${COLOR_CONTENT_BACKGROUND};
  padding: 4rem 3rem 3rem;
`;

export const StyledForm = styled.form`
  max-width: 50rem;
`;
export const StyledFormContent = styled.div``;

export const StyledFormTitle = styled.span``;

export const StyledFormInput = styled(Input)`
  padding: 0.7rem;
  border: 1px solid ${COLOR_DARK};
  background-color: ${COLOR_LIGHT};

  width: 30rem;

  &:focus-visible,
  &:active {
    border-color: ${COLOR_SPECIAL};
    outline: none;
  }

  @media(max-width:991px){

    width: calc(100% - 20px);
    margin: 0 auto;
    max-width: 30rem;
  }
`;

export const StyledFormSelect = styled(Select)`
  padding: 0.7rem;
  border: 1px solid ${COLOR_DARK};
  background-color: ${COLOR_LIGHT};

  width: 30rem;

  &:focus-visible,
  &:active {
    border-color: ${COLOR_SPECIAL};
    outline: none;
  }
`;

export const StyledFormInputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
  margin: 1rem 0;
  flex-wrap: wrap;

  @media (max-width: ${991 / 16}rem) {
    flex-direction: column;
    align-items: flex-end;
  }
`;
export const StyledFormInputLabel = styled.label`
  margin-right: 1rem;
  display: block;
  flex: 1;
  text-align: right;
`;


export const StyledFormButton = styled.button`
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

  &:hover{
    curor:pointer;
  }

  margin-top:3.5rem;
  margin-bottom:3.5rem;


`;


export const StyledFormButtonCentered = styled(StyledFormButton)`
  margin-left:auto;
  margin-right:auto;
`;


export const StyledFormButtonSecondary = styled(StyledFormButton)`
background-color:${COLOR_DARK}
`;

export const StyledFormInputError = styled.div`
  display: block;
  color: red;
  width: 100%;
  text-align: right;
`;


export const StyledFormButtonHorizontalContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-wrap:wrap;
gap:1rem;
`;

export const StyledFormInputList = styled.ul`
padding:0;
list-style:none;
`;

export const StyledFormInputListItem = styled.li`
padding:0.5rem;
`;