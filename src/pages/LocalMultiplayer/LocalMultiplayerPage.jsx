import React, { useState } from "react";
import "../../App.css";

import LocalPrometheusBoard from "../../game/components/LocalPrometheusBoard/LocalPrometheusBoard";
import Players from "../../game/logic/Players";
import { InitialGameStateWhite } from "../../game/logic/InitialGameState";

const LocalMultiplayerPage = () => {
  const [inProgress, setInProgress] = useState(false);
  const [playerOneSpherePlaced, setPlayerOneSpherePlaced] = useState(false);
  const [playerTwoSpherePlaced, setPlayerTwoSpherePlaced] = useState(false);
  // Stringify hack to deep clone InitialGameState - avoids mutation.
  const [gameState, setGameState] = useState(
    JSON.parse(JSON.stringify(InitialGameStateWhite))
  );
  const [winner, setWinner] = useState(null);
  const [turn, setTurn] = useState(Players.WHITE);

  return (
    <div className="app p-8 flex flex-col justify-center items-center">
      <LocalPrometheusBoard
        inProgress={inProgress}
        setInProgress={setInProgress}
        playerOneSpherePlaced={playerOneSpherePlaced}
        playerTwoSpherePlaced={playerTwoSpherePlaced}
        setPlayerOneSpherePlaced={setPlayerOneSpherePlaced}
        setPlayerTwoSpherePlaced={setPlayerTwoSpherePlaced}
        gameState={gameState}
        setGameState={setGameState}
        turn={turn}
        setTurn={setTurn}
        winner={winner}
        setWinner={setWinner}
      />
    </div>
  );
};

export default LocalMultiplayerPage;
