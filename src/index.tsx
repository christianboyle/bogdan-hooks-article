import React from 'react';
import ReactDOM from 'react-dom';

// export default function App() {
//   const setState = (initial: string): [() => string, (v: string) => void] => {
//     let state = initial;
//     return [() => state, (v: string) => (state = v)];
//   };

//   const [getter, setter] = setState('Adrian');
//   const firstState = getter();
//   setter('Bogdan');
//   const secondState = getter();

//   return (
//     <>
//       <p>First state: {firstState}</p>
//       <p>Second state: {secondState}</p>
//     </>
//   );
// }

export default function App() {
  function setState<T>(initial: T): [() => T, (v: T) => void] {
    let state = initial;
    return [() => state, (v: T) => (state = v)];
  }

  const [getter, setter] = setState([
    { ady: 1, bog: 2 },
    { ady: 3, bog: 4 }
  ]);

  const firstState = getter();

  setter([
    { ady: 100, bog: 200 },
    { ady: 300, bog: 400 }
  ]);

  const secondState = getter();

  return (
    <>
      First state: {firstState.map(first => <p>ady: {first.ady}, bog: {first.bog}</p>)}
      Second state: {secondState.map(second => <p>ady: {second.ady}, bog: {second.bog}</p>)}
    </>
  );

}

ReactDOM.render(<App />, document.getElementById('root'));
