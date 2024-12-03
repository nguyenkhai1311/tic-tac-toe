import useTicTacToe from "../hooks/useTicTacToe";

const gameModes = {
  FRIEND: "friend",
  COMPUTER: "computer",
};

function TicTacToe() {
  const {
    board,
    scoreO,
    scoreX,
    resetGame,
    resetScore,
    handleClick,
    getStatusMessage,
    handleChangeGameMode,
  } = useTicTacToe();

  return (
    <div className="flex h-[100vh] items-center justify-center bg-[#14bdac]">
      <div className="p-5 text-center">
        <div className="flex items-center justify-between">
          <select
            className="mb-5 block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            onChange={(e) => handleChangeGameMode(e.target.value)}
            defaultValue={gameModes.COMPUTER}
          >
            <option value={gameModes.COMPUTER}>Chơi với máy</option>
            <option value={gameModes.FRIEND}>Chơi với bạn bè</option>
          </select>

          <div className="mb-5 flex justify-between text-lg">
            <div className="font-bold text-slate-700">{getStatusMessage()}</div>
          </div>
        </div>
        <div className="mb-5 grid grid-cols-3 justify-center">
          {board.map((cell, index) => {
            return (
              <button
                className={`h-[130px] w-[130px] border-2 bg-slate-700 text-5xl ${cell === "X" ? "text-green-400" : cell === "O" ? "text-yellow-500" : ""}`}
                key={index}
                onClick={() => handleClick(index)}
                disabled={cell !== null}
              >
                {cell}
              </button>
            );
          })}
        </div>
        <div className="flex justify-between text-lg">
          <button
            type="button"
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700"
            onClick={resetGame}
          >
            Thiết lập lại game
          </button>
          <button
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700"
            onClick={resetScore}
          >
            Đặt lại tỉ số
          </button>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center gap-5">
          <div className="font-bold">Tỉ số</div>
          <div className="flex w-24 justify-between rounded border bg-white px-4 shadow-md">
            <p>X</p>
            <p>{scoreX}</p>
          </div>
          <div className="flex w-24 justify-between rounded border bg-white px-4 shadow-md">
            <p>O</p>
            <p>{scoreO}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
