import React, { useState } from 'react'; //se importa el usestate de react, pues es un comando que se utilizará más adelante

const PPT: React.FC = () => { //se declara la constante PPT, que sería piedra, papel y tijera
    const [playerChoice, setPlayerChoice] = useState<string | null>(null);
    const [computerChoice, setComputerChoice] = useState<string | null>(null);
    const [result, setResult] = useState<string | null>(null);

    const handlePlayerChoice = (choice: string) => {
        setPlayerChoice(choice);
    };
    
    const handlePlay = () => {
        const choices = ['piedra', 'papel', 'tijera'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
        setComputerChoice(computerChoice);
        setResult(getResult(playerChoice, computerChoice));
    };
    
    const getResult = (playerChoice: string | null, computerChoice: string | null) => {
        if (!playerChoice || !computerChoice) {
          return null;
        }
    
        if (playerChoice === computerChoice) {
            return 'Empate';
          } else if (
            (playerChoice === 'piedra' && computerChoice === 'tijera') ||
            (playerChoice === 'papel' && computerChoice === 'piedra') ||
            (playerChoice === 'tijera' && computerChoice === 'papel')
          ) {
            return 'Ganaste';
          } else {
            return 'Perdiste';
          }
        };

    return (
        <div>
          <div id="inicio">
            <h1 id="titulo">Piedra, papel y tijera</h1>
            <img src="rana.png" alt="rana" id="imagenrana" />
            <p id="quieresjugar">¿Quieres jugar?</p>
            <button onClick={handlePlay}>Empezar</button>
          </div>
          <div id="contenedor">
            <div id="opciones">
              <p id="opcion">Elige una opción:</p>
              <img src="./piedra.png" alt="Piedra" id="piedra" onClick={() => handlePlayerChoice('piedra')} />
              <img src="./papel.png" alt="Papel" id="papel" onClick={() => handlePlayerChoice('papel')} />
              <img src="./tijera.png" alt="Tijera" id="tijera" onClick={() => handlePlayerChoice('tijera')} />
              <p id="lcc">No hay ninguna selección</p>
              <br />
              <button onClick={handlePlay}>Jugar</button>
            </div>
          </div>
          {playerChoice && computerChoice && result && (
            <div>
              <p>Tu elección: {playerChoice}</p>
              <p>Elección de la computadora: {computerChoice}</p>
              <p>Resultado: {result}</p>
            </div>
          )}
        </div>
      );
    };
    
    export default PPT;