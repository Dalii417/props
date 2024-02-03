// MonComposant.js
import React from "react";
import Player from "./Player";
import { players } from "./players";

// Définir le composant fonctionnel
const PlayerList = () => {
  return (
    <div className="row">
      {players.map((player) => (
        <div className="col-4">
          <Player player={player}></Player>
        </div>
      ))}
    </div>
  );
};

// Exporter le composant pour pouvoir l'utiliser ailleurs
export default PlayerList;
