import React from 'react';

// PUBLIC_INTERFACE
function Square({ value, onClick }) {
  return (
    <button 
      className={`square ${value?.toLowerCase()}`} 
      onClick={onClick}
      aria-label={value ? `Square with ${value}` : 'Empty square'}
    >
      {value}
    </button>
  );
}

// PUBLIC_INTERFACE
function Board({ squares, onSquareClick }) {
  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => onSquareClick(i)}
      />
    );
  };

  return (
    <div className="board">
      {[...Array(9)].map((_, i) => renderSquare(i))}
    </div>
  );
}

export default Board;
