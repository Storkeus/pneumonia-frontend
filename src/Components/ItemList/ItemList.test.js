import { render, screen, fireEvent } from "@testing-library/react";
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