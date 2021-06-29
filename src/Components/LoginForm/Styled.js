import { COLOR_LIGHT, COLOR_SPECIAL, COLOR_DARK } from "../../Const";
import styled from "styled-components";
import FormInput from "../FormInput/FormInput";

export const StyledLoginForm = styled.form`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  background-color: ${COLOR_DARK};
  padding: 1rem 1.5rem 1.5rem;
  color: ${COLOR_LIGHT};
  width: calc(100% - 3rem);
  margin: 0 auto;
  max-width: 60rem;
  box-shadow: 1rem 1rem 1.8rem -0.9rem rgba(0, 0, 0, 0.43);
`;

export const StyledLoginFormTitle = styled.h2`
  display: flex;
  margin: 0 auto 0 0;
  flex-direction: column;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`;

export const StyledLoginFormContainer = styled.div`
  display: flex;
  margin: 50vh auto 0;
  transform: translateY(-50%);
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledLoginFormButton = styled.button`
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
  margin: 3.5rem 0 1.5rem auto;
`;

export const StyledLoginFormLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & a {
    color: ${COLOR_LIGHT};
    text-decoration: none;
  }
`;

export const StyledLoginFormInputGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 2rem 0;
  flex-direction: column;
  align-items: start;
`;

export const StyledLoginFormInputLabel = styled.label`
  margin-right: 1.5rem;
  display: block;
  white-space: nowrap;
  margin-bottom: 1rem;
`;

export const StyledLoginFormInput = styled(FormInput)`
  height: 4rem;
  width: 100%;
  padding: 0.5rem;
  background-color: rgba(243, 244, 237, 0.75);
  border: none;
  border-bottom: 0.2rem solid ${COLOR_SPECIAL};
  color: #424642;
  font-size: 1.6rem;
  &:focus,
  &:active {
    outline: none;
  }
`;
