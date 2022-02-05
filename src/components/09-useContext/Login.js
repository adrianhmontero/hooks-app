import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Login = () => {
  const {
    user: { id, name },
    setUser
  } = useContext(UserContext);
  const newUser = { id: 7, name: "Adrián Montero", email: "adrian@gmail.com" };

  return (
    <div>
      <h1>Login</h1>
      <hr />
      {!id ? (
        <button
          className="btn btn-outline-primary"
          onClick={() => setUser(newUser)}
        >
          Get user
        </button>
      ) : (
        <p>Hi, {name}!</p>
      )}
    </div>
  );
};

export default Login;
