import React from "react";
import "./Cell.css";

const Cell = ({ playerGuess, handleKeyUp, id, num, selectCell, selected }) => {
  const handleClick = () => {
    selectCell(id);
  };
  const [x, y] = id.split("-");
  const [selectedX, selectedY] = selected;
  let bgColor;
  if (playerGuess && Number(playerGuess) !== num) {
    bgColor = "white";
  } else if (selectedX == x || selectedY == y) {
    if (selectedX == x && selectedY == y) {
      bgColor = "#FDDD5C";
    } else {
      bgColor = "#ADD8E6";
    }
  } else {
    bgColor = "white";
  }
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="Cell"
      onClick={handleClick}
      onKeyUp={handleKeyUp}
    >
      {}
      {playerGuess ? playerGuess : num}
    </div>
  );
};

export default Cell;
