import React, { useState } from 'react';

const Counter = () => {

    let [count, setCount]=useState(0);

    let increment=()=>{
    //  setCount(count + 1); //count=0+1//not use
    //  setCount(count + 1); //count=1+1=2
    //  setCount(count + 1); //count=2+1=3
    //  setCount(count + 1);//count=3+1=4

    setCount((prevStatte) => prevStatte + 1);//0+4=4
    setCount((prevStatte) => prevStatte + 1);//4+4=8
    setCount((prevStatte) => prevStatte + 1);//8+4=12
    setCount((prevStatte) => prevStatte + 1);//12+4=16
    }
  return (
    <div>
      <h1>Counter</h1>
      <h3>Count -{count}</h3>

      <button onClick={increment}>increment</button>
    </div>
  );
}

export default Counter;
