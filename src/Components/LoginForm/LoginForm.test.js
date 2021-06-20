import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import ReactTestUtils from 'react-dom/test-utils';
import App from "../../App";
import Login from "../Login";
import LoginForm from "./LoginForm";
import LoginFormButton from "./LoginFormButton";
import LoginFormLinks from "./LoginFormLinks";
import LoginFormInput from "./LoginFormInput";


/**
 * Smoke tests of LoginForm components
 */

 it('LoginFormLinks renders without crashing',()=>{
  render(<LoginFormLinks/>);
});


 it('LoginFormInput renders without crashing',()=>{
  render(<LoginFormInput/>);
});


 it('LoginFormButton renders without crashing',()=>{
  render(<LoginFormButton/>);
});


it('LoginForm renders without crashing',()=>{
  render(<LoginForm/>);
});


// test("should show error message on non valid e-mail", () => {
//   render(
//     <MemoryRouter initialEntries={["/login"]}>
//       <Login />
//     </MemoryRouter>
//   );
//   const eMailInput = screen.getByLabelText("Adres e-mail:");
//   fireEvent.change(eMailInput, {
//     target: { value: "not a valid e-mail" },
//   });


//   const button = document.querySelector('button');
//   fireEvent.click(button);

//   const validationError = screen.getByText(/Adres e-mail jest nieprawidłowy/i);
//   expect(validationError).toBeInTheDocument();
// });


// test("should pass mail with diactric characters", () => {
//   render(
//     <MemoryRouter initialEntries={["/login"]}>
//       <Login />
//     </MemoryRouter>
//   );
//   const eMailInput = screen.getByLabelText("Adres e-mail:");
//   fireEvent.change(eMailInput, {
//     target: { value: "żółć@żółć.com" },
//   });

  
//   const button = document.querySelector('button');
//   fireEvent.click(button);

//   const validationError = screen.queryByText(/Adres e-mail jest nieprawidłowy/i);
//   expect(validationError).toBeNull();
// });
