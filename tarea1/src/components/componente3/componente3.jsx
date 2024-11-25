import React from "react";
import { useStore } from "../../store/store.jsx";

const Componente3 = () => {
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);

  return (
    <div className="p-4 bg-red-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-red-700">Componente 3</h1>
      <div className="mt-4 flex items-center justify-center gap-4">
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow " onClick={decrement}> - </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow " onClick={increment}> + </button>
      </div>
    </div>
  );
};

export default Componente3;
