import styled from "styled-components";

export const StyledLoginForm = styled.form`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  background-color: #536162;
  padding: 10px 15px 15px;
  color: #f3f4ed;
  width: calc(100% - 30px);
  margin: 0 auto;
  max-width: 600px;
  box-shadow: 10px 10px 18px -9px rgba(0, 0, 0, 0.43);
`;

export const StyledLoginFormTitle = styled.h2`
  display: flex;
  margin: 0 auto 0 0;
  flex-direction: column;
  text-transform: uppercase;
  letter-spacing: 2px;
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
  jusitfy-content: center;
  align-items: center;
  text-align: center;
  background-color: #c06014;
  color: #f3f4ed;
  border-color: #fff;
  font-size: 22px;
  border: none;
  padding: 5px 13px;
  margin: 35px 0 15px auto;
`;

export const StyledLoginFormLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & a {
    color: #f3f4ed;
    text-decoration: none;
  }
`;

export const StyledLoginFormInputGroup = styled.div`
  display: flex;
  jusitfy-content: flex-start;
  align-items: center;
  margin: 20px 0;
  flex-direction: column;
  align-items: start;
`;

export const StyledLoginFormInputLabel = styled.label`
  margin-right: 15px;
  display: block;
  white-space: nowrap;
  margin-bottom: 10px;
`;

export const StyledLoginFormInput = styled.input`
  height: 40px;
  width: 100%;
  padding: 5px;
  background-color: rgba(243, 244, 237, 0.75);
  border: none;
  border-bottom: 2px solid #c06014;
  color: #424642;
  font-size: 16px;
  &:focus,
  &:active {
    outline: none;
  }
`;
