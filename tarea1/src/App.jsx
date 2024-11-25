import React from 'react';
import Componente1 from './components/componente1/componente1';
import Componente2 from './components/componente2/componente2';
import Componente3 from './components/componente3/componente3';
function App() {

  return (
    <>
      <div className="flex items-center">
      <Componente1 />
      <Componente2 />
      <Componente3 />
      </div>
    </>
  )
}

export default App
