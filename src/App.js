import "./App.css";
import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const fetchDate = async () => {
    let myData = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(myData.data);
  };

  return <button onClick={fetchDate}>fetch data</button>;
};

export default App;

// axios installed (npm install axios; npm uninstall axios). When packages are installed it goes to the node_modles folder but the name will be in package.json
// json endpoint was obtained from https://jsonplaceholder.typicode.com/
