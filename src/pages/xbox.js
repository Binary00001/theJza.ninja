import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

import Titles from "./games";

const Progress = () => (
  <>
    {Titles.map((game, key) => (
      <div style={{ width: "50%" }} className="gameProgress">
        <h3>{game.name}</h3>
        <ProgressBar
          max={game.maxGamerscore}
          now={game.currentGamerscore}
          variant="success"
          //   label={`${game.maxGamerscore - game.currentGamerscore}%`}
        />
      </div>
    ))}
  </>
);

export default Progress;
