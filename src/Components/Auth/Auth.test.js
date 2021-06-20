import { render, screen, fireEvent } from "@testing-library/react";
import Auth from './Auth';
import AuthAdmin from './AuthAdmin';
import AuthUser from './AuthUser';
import AuthNotLogged from './AuthNotLogged';
import { Provider } from "react-redux";
import store from "../../Redux/Store";
import { BrowserRouter as Router} from "react-router-dom";
/**
 * Smoke tests of Auth Components
 */

 it('Auth renders without crashing',()=>{
  render(<Provider store={store}><Router><Auth/></Router></Provider>);
});


it('AuthAdmin renders without crashing',()=>{
  render(<Provider store={store}><Router><AuthAdmin/></Router></Provider>);
});

it('AuthUser renders without crashing',()=>{
  render(<Provider store={store}><Router><AuthUser/></Router></Provider>);
});

it('AuthNotLogged renders without crashing',()=>{
  render(<Provider store={store}><Router><AuthNotLogged/></Router></Provider>);
});