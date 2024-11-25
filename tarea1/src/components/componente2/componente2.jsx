import React from "react";

const Componente2 = () => {
  return (
    <div className="p-4 bg-green-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-green-700">Componente 2</h1>
      <p className="mt-2 text-lg">
        Este componente no interactúa con el estado.
      </p>
    </div>
  );
};

export default Componente2;
