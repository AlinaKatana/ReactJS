import React, { useState } from "react";
import "./assets/styles.css"; 


export function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const handleSignIn = () => {
    if (username && email && password) {
      const newUser = { username, email, password };
      setUsers([...users, newUser]);
      setUsername("");
      setEmail("");
      setPassword("");
      setShowTable(true);
    }
  };

  const handleReset = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setShowTable(false);
  };

  return (
    <div id="app">
      {!showTable ? (
        <>
          <h1>Sign In</h1>
          <br />
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <br />
          <br />
          <button onClick={handleSignIn}>Sign In</button>
        </>
      ) : (
        <>
          <h1>User Details</h1>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </div>
  );
}
