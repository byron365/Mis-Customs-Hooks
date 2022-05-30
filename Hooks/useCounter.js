import { useState } from "react";


export const useCounter = (inicitialState = 10) => {
  const [counter, setCounter] = useState(inicitialState);

  const increment = (factor = 1)=>{
      setCounter(counter + factor)
  }

  const decrement = (factor = 1) =>{
      setCounter(counter - factor)
  }

  const reset = () =>{
      setCounter(inicitialState)
  }

  return {counter, increment, decrement, reset};
}

/*
Los custom hooks sin funciones creadas por nosostros las cuales se pueden programar 
y reutilizar cada vez que queramos

*/
