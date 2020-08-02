import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

import Titles from "./games";

const Progress = () => (
  <div className="bg-dark">
    {Titles.map((game, key) => (
      <div style={{ width: "50%" }} className="gameProgress">
        <Link to={game.name} style={{ color: "white" }}>
          <p>{game.name}</p>
          <ProgressBar
            max={game.maxGamerscore}
            now={game.currentGamerscore}
            variant="success"
            //   label={`${game.maxGamerscore - game.currentGamerscore}%`}
          />
        </Link>
      </div>
    ))}
  </div>
);

export default Progress;
