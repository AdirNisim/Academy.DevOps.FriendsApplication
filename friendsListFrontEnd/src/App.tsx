import React from "react";
import FriendForm from "./Components/friendsForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>My friends playground.</h1>
      <FriendForm></FriendForm>
      <button>Add A friend</button>
      <button> clear all</button>
    </div>
  );
}

export default App;
