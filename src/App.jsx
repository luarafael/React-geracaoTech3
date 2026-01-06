import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container-principal">
      <div className="card-boas-vindas">
        <h1>Sejam bem vindos</h1>
        <p>
          Esse é meu primeiro projeto em React! criado enquanto estudava no
          Geração Tech3.0
        </p>
        <button className="button-entrar" onClick={() => alert("Iniciando...")}>
          Iniciar
        </button>
      </div>
    </div>
  );
}

export default App;
