import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectCount } from "../../Redux/Slices/Counter";
import Menu from "../../Menu/Menu";


const Page= (props) => {
  const count=useSelector(selectCount);
  const dispatch = useDispatch();
  // const [count,setCount]=React.useState(0);
  return (
    <main>
      <Menu></Menu>
      {props.children}

      {/* <h1>The count is {count}</h1>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button> */}
    </main>
  );
};

export default Page;
