import React, { useState, useEffect } from "react";

const App = () => {
  const [saludoVisible, setSaludoVisible] = useState(true);
  const [nombreActual, setNombreActual] = useState("");

  return (
    <div
      style={{
        fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div>
        {saludoVisible && <Saludo nombre={nombreActual} />}
        <input
          type="text"
          placeholder="Ingresá tu nombre"
          value={nombreActual}
          onChange={e => setNombreActual(e.target.value)}
        />
        <button onClick={() => setSaludoVisible(!saludoVisible)}>
          {saludoVisible ? "Ocultar" : "Mostrar"}
        </button>
      </div>
      <Title />
      <MenuItems />
    </div>
  );
};

const Title = () => {
  return <h1>Coffee House</h1>;
};

const MenuItems = () => {
  return (
    <ul>
      <Item name="Coffee" color={"#208FD8"} />
      <Item name="Tea" color={"#EF233C"} />
      <Item name="Milk" color={"#D5D820"} />
      <Item name="Other" color={"#000"} />
    </ul>
  );
};

const Item = ({ name, color }) => {
  return <li style={{ color, fontSize: 18, fontWeight: "bold" }}>{name}</li>;
};

const Saludo = ({ nombre }) => {
  const value = nombre === "" ? "<Nombre>" : nombre;

  useEffect(() => {
    const timer = setTimeout(() => (document.title = `Hola, ${value}`), 3000);
    return function cleanup() {
      clearTimeout(timer);
    };
  });
  return <div>Hola, {value}</div>;
};

export default App;
