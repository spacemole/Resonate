import React from "react";
import Contacts from "./components/Contacts";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <h1>Contacts List</h1>
      <Contacts />
    </div>
  );
};

export default App;
