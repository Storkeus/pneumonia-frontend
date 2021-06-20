import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Provider } from 'react-redux';
import Login from "../Login";
import LoginForm from "./LoginForm";
import LoginFormButton from "./LoginFormButton";
import LoginFormLinks from "./LoginFormLinks";
import LoginFormInput from "./LoginFormInput";
import Store from "../../Redux/Store";


describe('LoginForm',()=>
{

/**
 * Smoke tests of LoginForm components
 */

 test('LoginFormLinks renders without crashing',()=>{
  render(<LoginFormLinks/>);
});


 test('LoginFormInput renders without crashing',()=>{
  render(<LoginFormInput/>);
});


 test('LoginFormButton renders without crashing',()=>{
  render(<LoginFormButton/>);
});


test('LoginForm renders without crashing',()=>{
  render(<LoginForm/>);
});


/**
 * Tests of validation
 */

test("shows error message on non valid e-mail", () => {
  render(
    <Provider store={Store}>
    <MemoryRouter initialEntries={["/login"]}>
      <Login />
    </MemoryRouter>
    </Provider>
  );
  const eMailInput = screen.getByLabelText("Adres e-mail:");
  fireEvent.change(eMailInput, {
    target: { value: "not a valid e-mail" },
  });


  const button = document.querySelector('button');
  fireEvent.click(button);

  const validationError = screen.getByText(/Adres e-mail jest nieprawidłowy/i);
  expect(validationError).toBeInTheDocument();
});


test("passes e-mail address with diactric characters", () => {
  render(
    <Provider store={Store}>
    <MemoryRouter initialEntries={["/login"]}>
      <Login />
    </MemoryRouter>
    </Provider>
  );
  const eMailInput = screen.getByLabelText("Adres e-mail:");
  fireEvent.change(eMailInput, {
    target: { value: "żółć@żółć.com" },
  });

  
  const button = document.querySelector('button');
  fireEvent.click(button);

  const validationError = screen.queryByText(/Adres e-mail jest nieprawidłowy/i);
  expect(validationError).toBeNull();
});
});