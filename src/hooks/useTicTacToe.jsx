import { useState } from "react";
import { gameModes } from "../utils/constants";
import { bestMove, calculateWinner } from "../utils/utils";

const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const [gameMode, setGameMode] = useState(gameModes.COMPUTER);
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);

  const resetScore = () => {
    setScoreO(0);
    setScoreX(0);
  };

  const resetGame = () => {
    setBoard(initialBoard());
    setIsXNext(true);
  };

  const handleChangeGameMode = (mode) => {
    setGameMode(mode);
    resetGame();
    resetScore();
  };

  const handleClick = (index) => {
    const winner = calculateWinner(board);

    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    if (gameMode === gameModes.FRIEND) {
      setIsXNext(!isXNext);
    } else {
      if (!isXNext) return;

      const aiMoveIndex = bestMove(newBoard);
      if (aiMoveIndex !== undefined) {
        newBoard[aiMoveIndex] = "O";
        setBoard(newBoard);
      }

      setIsXNext(true);
    }

    const newWinner = calculateWinner(newBoard);
    if (newWinner === "X") {
      setScoreX(scoreX + 1);
    } else if (newWinner === "O") {
      setScoreO(scoreO + 1);
    }
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `${winner} chiến thắng!!`;

    if (!board.includes(null)) return `Hòa`;

    return `Lượt của ${isXNext ? "X" : "O"}`;
  };

  return {
    board,
    scoreO,
    scoreX,
    resetGame,
    resetScore,
    getStatusMessage,
    handleClick,
    handleChangeGameMode,
  };
};

export default useTicTacToe;
