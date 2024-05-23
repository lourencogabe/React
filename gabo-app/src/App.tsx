import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

type Player = "O" | "X";

function App() {
  const [turn, setTurn] = useState("O");
  const [winner, setWinner] = useState<Player | null>(null)
  const [draw, setDraw] = useState<boolean | null>(null)
  
  {

  }

  const [marks, setMarks] = useState({})
  
  const getSquares = () =>{
    return new Array(9).fill(true);
  }

  return (
    <div className="container">
      <h1>O ganhou</h1>
      <h1>Empate</h1>
      <button>Jogar novamente</button>
      <p>É a vez de X</p>
      <div className="board">
      {getSquares().map((_, i) =>(
        <div className="cell">X</div>
      ))}
      </div>
    </div>
  )
}

export default App;
