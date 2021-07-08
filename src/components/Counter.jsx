export function Counter() {
  
  let counter = 0;

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