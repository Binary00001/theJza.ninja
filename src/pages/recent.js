import React from "react";
import recentActivity from "./recentActivity";

const Recent = () => (
  <>
    {recentActivity.map((game, key) => (
      <div className="text-center">
        <img
          src={game.achievementIcon}
          alt="achievemnt icon"
          style={{ width: "100px", height: "100px" }}
        />
        <h3>Game: {game.contentTitle}</h3>
        <p>Achievement: {game.achievementName}</p>
      </div>
    ))}
  </>
);

export default Recent;
