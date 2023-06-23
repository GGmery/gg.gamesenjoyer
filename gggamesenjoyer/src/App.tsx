import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Games Enjoyer</h1>
        <p> ¿Quieres entretenerte y no sabes cómo hacerlo? ¡Prueba estos juegos! </p>
        <a className="Piedra-Papel-Tijera" href="./piedra-papel-tijera/ppt.tsx" target="blank">Piedra, papel y tijera</a>
        <a></a>
        <a></a>
      </header>
    </div>
  );
}

export default App;
