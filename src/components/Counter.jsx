import {useState} from 'react';

export function Counter() {
  
  let counter = useState(0);

  function increment() {
    counter += 1;

  }

  return(
    <div>
      <h2>0</h2>
      <button type='button'>Increment</button>
    </div>
  );
}