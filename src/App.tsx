import React from "react";
import { useUser } from "./state/user/hook";

function App() {
  const { user, onSetUser } = useUser();
  const updateUser = () => {
    onSetUser({
      name: "John Doe",
      address: "123 Main St",
      role: "admin",
    });
  };
  return (
    <div>
      <h1>React Redux TS</h1>
      <h2>current user state in redux: {JSON.stringify(user)}</h2>
      <br />
      <button onClick={updateUser}>Update User</button>
    </div>
  );
}

export default App;
