import React from "react";
import styled from "styled-components";


class LoginFormInput extends React.Component {
  render() {
    return (
      <StyledLoginFormInputGroup>
<StyledLoginFormInputLabel for={this.props.name}>{this.props.title}:</StyledLoginFormInputLabel>
<StyledLoginFormInput name={this.props.name} type={this.props.type?this.props.type:'text'}/>
      </StyledLoginFormInputGroup>
    );
  }
}
export default LoginFormInput;

const StyledLoginFormInputGroup = styled.div`
display:flex;
jusitfy-content:flex-start;
align-items:center;
margin:20px 0;
flex-direction:column;
align-items:start;

`;


const StyledLoginFormInputLabel = styled.label`
margin-right:15px;
display:block;
white-space:nowrap;
margin-bottom:10px;
`;

const StyledLoginFormInput = styled.input`
height: 40px;
width: 100%;
padding: 5px;
background-color: rgba(243,244,237,.75);;
border: none; 
border-bottom: 2px solid #c06014;
color:#424642;
font-size:16px;
&:focus,&:active
{
  outline:none;

}
`;
