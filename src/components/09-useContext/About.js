import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const About = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h1>About</h1>
      <hr />
      {user?.id ? (
        <>
          <pre>{JSON.stringify(user, null, 3)}</pre>
          <button className="btn btn-warning" onClick={() => setUser({})}>
            Logout
          </button>
        </>
      ) : (
        <p>Login to continue</p>
      )}
    </div>
  );
};

export default About;
