import React, { useState, useRef, useEffect } from "react";
import Cell from "./Cell";
import "./Sudoku.css";
import { checkValidity, findBlock } from "./SolvingAlgorithm";

const Sudoku = () => {
  // const initialGame = [
  //   [1, 2, 3, 4, 5, 6, 7, 8, 9],
  //   [4, 5, 6, 7, 8, 9, 1, 2, 3],
  //   [7, 8, 9, 1, 2, 3, 4, 5, 6],
  //   [2, 3, 1, 5, 6, 4, 8, 9, 7],
  //   [5, 6, 4, 8, 9, 7, 2, 3, 1],
  //   [8, 9, 7, 2, 3, 1, 5, 6, 4],
  //   [3, 1, 2, 6, 4, 5, 9, 7, 8],
  //   [6, 4, 5, 9, 7, 8, 3, 1, 2],
  //   [9, 7, 8, 3, 1, 2, 6, 4, 5],
  // ];

  const initialGame = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  function playerBoard() {
    const board = [];
    for (let i = 0; i < 9; i++) {
      const row = [];
      for (let j = 0; j < 9; j++) {
        row.push(null);
      }
      board.push(row);
    }
    return board;
  }
  const initialPlayerGuesses = playerBoard();
  const [playerGuesses, setPlayerGuesses] = useState(initialPlayerGuesses);
  const [selected, setSelected] = useState([0, 0]);
  const [game, setGame] = useState(initialGame);
  const selectCell = (coords) => {
    const [x, y] = coords.split("-").map(Number);
    console.log(x, y);
    findBlock(x, y);
    setSelected([x, y]);
  };
  const selectedRef = useRef();
  selectedRef.current = selected;
  useEffect(() => {
    const handleKeyUp = (e) => {
      if ("123456789".indexOf(e.key) === -1) {
        return;
      } else {
        const [x, y] = selectedRef.current;
        setGame((board) => {
          board[y][x] = e.key;
          return [...board];
        });
      }
    };
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const [x, y] = selected;
    checkValidity(x, y, game);
  }, [game]);

  return (
    <div className="Sudoku">
      {game.map((row, y) =>
        row.map((num, x) => (
          <Cell
            numShowing={true}
            selected={selected}
            selectCell={selectCell}
            key={`${x}-${y}`}
            id={`${x}-${y}`}
            num={num}
            playerGuess={playerGuesses[x][y]}
          />
        ))
      )}
    </div>
  );
};

export default Sudoku;
