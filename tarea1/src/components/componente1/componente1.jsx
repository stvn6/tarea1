import React from "react";
import { useStore } from "../../store/store.jsx";

const Componente1 = () => {
  const counter = useStore((state) => state.counter);

  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-blue-700">Componente 1</h1>
      <p className="mt-2 text-lg">El valor del contador es: <span className="font-mono text-xl font-bold">{counter}</span></p>
    </div>
  );
};

export default Componente1;
