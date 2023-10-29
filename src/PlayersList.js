// importation des compsant et bibliotheqeu
import React from "react";
import Player from "./Player"; //cecci c'est une card 
import Players from "./players";

const PlayerList =() => {

return(
<div>
    {Players.map((pl) =>(
    <Player{...pl}/>
))}
</div>

);

// on utilise array function map pour le parcourir 

}

export default PlayerList;