// function App() {
//   return <div>Hello React!</div>;
// }
// 
// export default App;

import React from 'react';
import image from "./img/beach.jpg"; 

function App() {
  return (
    // <div
    //   style={{
    //     backgroundColor: 'blue',
    //     backgroundPosition: 'center',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //      width: '100vw',
    //      height: '100vh'
    //   }}
    // />
    <div style={{
      backgroundImage:`url(${image})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100vw',
      height: '100vh'}}>
    </div>
  );
}

export default App;