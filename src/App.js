import "./App.css";
import axios from "axios";
import React, { useState } from "react";

const App = () => {
  let [users, setUsers] = useState([]);

  const fetchDate = async () => {
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    let usernames = data.map((person) => {
      return { username: person.username, id: person.id };
    });
    setUsers(usernames);
  };

  return (
    <div>
      {JSON.stringify(users)}
      {users.map((user) => (
        <div key={user.id}>
          My username is {user.username} with a name of {user.name}, and id of{" "}
          {""}
          {user.id}
        </div>
      ))}
      <button onClick={fetchDate}>fetch data</button>
    </div>
  );
};

export default App;

// axios installed (npm install axios; npm uninstall axios). When packages are installed it goes to the node_modles folder but the name will be in package.json
// json endpoint was obtained from https://jsonplaceholder.typicode.com/

// fetch Api is built in javascript while axios is an external library. So to use axios in pure javascript, you need to bring it in using Content Delivery Network(CDN).
// Axios is simple and light (lightweight library). Axios is third party library while fetch API is part of javascript.

// useEffect enables implementation of side effect. React is primarily meant to render things on page and respond to effects.

// in connectiing from front end port to a backend port, you can use Cross-Origin Resource Sharing (CORS), and whitelist the frontend for security reasons
// - the whilelisted property is the only one that can access it. The whitelisting configuration is done at the backend.
// browser does enforce CORS.

// ASSIGNMENT- Fetch for the id and the username only to give an array of objects [{id: "1", username: "Bret"}, {id: "2", username: "Antonette"}] using

// any of the HOFs
