import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import ReactTestUtils from 'react-dom/test-utils';

import ItemListTable from './ItemListTable';
import ItemList from './ItemList';


/**
 * Smoke tests of ItemList Components
 */

 it('ItemListTable renders without crashing',()=>{
  render(<ItemListTable/>);
});


it('ItemList renders without crashing',()=>{
  render(<ItemList/>);
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
