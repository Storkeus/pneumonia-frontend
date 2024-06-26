import React from "react";
import {
  StyledFormContainer,
  StyledForm,
  StyledFormTitle,
  StyledFormContent,
  StyledFormButtonCentered,
} from "./Styled";
import Loading from "../Loading/Loading";


/**
 * Renders form
 * @param {object} props
 * @param {function} onSubmit form submit handler
 * @param {string} title form title
 * @param {object} props.children components with form controls
 * @param {string} props.submitName text displayed on submit button
 * @returns \<StyledFormContainer\>
 */
const Form = (props) => {
  const { submitName = "Zapisz", onSubmit, title, children } = props;
  return (
    <StyledFormContainer>
      <StyledForm onSubmit={onSubmit}>

        {props.isLoading
          ? <Loading />
          : <><StyledFormTitle>{title}</StyledFormTitle>
            <StyledFormContent>{children}</StyledFormContent>
            <StyledFormButtonCentered>{submitName}</StyledFormButtonCentered></>}

      </StyledForm>
    </StyledFormContainer>
  );
};

export default Form;
