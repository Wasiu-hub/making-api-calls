import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

// const App = () => {
//   let [users, setUsers] = useState([]);

//   const fetchDate = async () => {
//     let { data } = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     let usernames = data.map((person) => {
//       return { username: person.username, id: person.id };
//     });
//     setUsers(usernames);
//   };

//   return (
//     <div>
//       {JSON.stringify(users)}
//       {users.map((user) => (
//         <div key={user.id}>
//           My username is {user.username} with a name of {user.name}, and id of{" "}
//           {""}
//           {user.id}
//         </div>
//       ))}
//       <button onClick={fetchDate}>fetch data</button>
//     </div>
//   );
// };

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

// useEffect ARE USED TO HANDLE SIDE EFFECT - side effect
// primary purpose of React is to respond to events and display user interface. useEffect enables us to get the data without clicking on a button.

// const App = () => {
//   let [users, setUsers] = useState([]);

//   let [userId, setUserId] = useState("1");

//   useEffect(() => {
//     const myData = async () => {
//       let users = await axios.get("https://jsonplaceholder.typicode.com/users");
//       // console.log(users);
//       setUsers(users.data);
//     };
//     myData();
//   }, []);

//   const fetchSingleUser = async () => {
//     let { data } = await axios.get(
//       `https://jsonplaceholder.typicode.com/users/${userId}` // using literal operator (temperate literal) here
//     );
//     console.log(data);
//   };

//   useEffect(() => {
//     const fetchSingleUser = async () => {
//       let { data } = await axios.get(
//         `https://jsonplaceholder.typicode.com/users/${userId}`
//       );
//       console.log(data);
//     };

//     fetchSingleUser();
//   }, [userId]); // the code runs again if the userId value changes

//   return (
//     <div>
//       <input onInput={(e) => setUserId(e.target.value)} />
//       {/* <button onClick={fetchSingleUser}>get users</button> */}

//       {users.map((user) => (
//         <div key={user.id}>{user.username}</div>
//       ))}
//     </div>
//   );
// };

// running code (component) immediately the browser loads (the component loads)- using useEffect.

// ASSIGNMENT: Get the post resources from the json placeholder website for a particular id entered into the input search, and make the title

// of the fetched information bold and the body underneat it.

// there are two problems here after this lecture: duplicate infos are printed when the browser loads (can be corrected by commenting out React.StrictMode in index.js file), and the browser loading all the data when no input is added. The second problem is solved in the next class by using useEffect as a cleanup function.

// USE EFFECT AS A CLEAN UP FUNCTION ==============

// const App = () => {
//   let [inp, setInp] = useState("");
//   let [title, setTitle] = useState("");

//   useEffect(() => {
//     const myFunc = async () => {
//       let response = await axios.get(
//         `https://jsonplaceholder.typicode.com/posts/${inp}`
//       );
//       console.log(response.data);
//       setTitle(response.data.title);
//     };

//     let myTimeout = setTimeout(() => {
//       // this code is runned first in this block
//       myFunc();
//     }, 3000); // it calls myFunc(), 3 seconds after the value inp has changed
//     // myFunc();

//     return () => {
//       clearTimeout(myTimeout); // clears the timeout before the interval of 3 seconds, and note what happens if the clearTimeout is not within a code block.
//     };
//   }, [inp]);

//   return (
//     <div>
//       The title is <b>{title}</b>{" "}
//       <input onInput={(e) => setInp(e.target.value)} />
//     </div>
//   );
// };
// ASSIGNMENT: MAKE A COUNTDOWN TIMER WITH REACT JS.
// SOLUTION TO ASSIGNMENT BELOW

const App = () => {
  let [inputVal, setInputVal] = useState("");

  const decrement = () => {
    setInterval(() => {
      setInputVal(inputVal - 1);
    }, 1000);
  };

  return (
    <div>
      <input onInput={(e) => setInputVal(e.target.value)} />
      <button onClick={decrement}>Click me</button>
    </div>
  );
};

// CLEANUP FUNCTION BELOW
// const App = () => {
//   let [inp, setInp] = useState("");
//   let [title, setTitle] = useState("");

//   useEffect(() => {
//     console.log("Haaayyy");
//     return () => {
//       console.log("Hello"); // this is printed out firsrt before Haaayyy
//     };
//   }, [inp]);

//   return (
//     <div>
//       The title is <b>{title}</b>{" "}
//       <input onInput={(e) => setInp(e.target.value)} />
//     </div>
//   );
// };

// ANOTHER EXPALNATION ON CLEANUP FUNCTION BELOW

// function App() {
//   const [show, setShow] = useState(false);

//   return (
//     <div>
//       <h1>Coding</h1>
//       <button onClick={() => setShow(!show)}>Click</button>

//       {show && <Child />}
//     </div>
//   );
// }

// function Child() {
//   useEffect(() => {
//     let i = 0;
//     const intervalId = setInterval(() => {
//       console.log("Hello_" + i);
//       i++;
//     }, 1000);

// timer triggers
// creating websocket
// subscribing to events in the DOM
// other "standy" events

// return function () {
// cleanup side effects
// console.log("Hey I'm leaving the DOM"); // it's called before the component is unmounted (i.e before it leaves the DOM)
//     clearInterval(intervalId);
//   };
// }, []);

//   return <h2>Child</h2>;
// }

// clean up function help user to finish typing before fetching data.

export default App;
