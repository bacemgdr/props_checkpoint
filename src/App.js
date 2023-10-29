import React from "react";
import PlayerList from "./PlayersList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="app-title" >FIFA Ballon D'OR 2022</h1>
      <PlayerList />
    </div>
  );
}

export default App;