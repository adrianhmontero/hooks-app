import React, { useState } from "react";
import "./form.css";
import { Message } from "./Message";

const initialFormState = { name: "", age: 0 };

export const SimpleForm = () => {
  const [form, setForm] = useState(initialFormState);

  const handleInput = ({ target: { value, name } }) =>
    setForm({ ...form, [name]: value });

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className="form-group">
        {Object.entries(form).map(([name, value]) => (
          <input
            type="text"
            name={name}
            className="form-control"
            placeholder={"Your " + name}
            autoComplete="off"
            value={value}
            onChange={handleInput}
          />
        ))}
      </div>
      {form?.age >= 18 && <Message />}
    </>
  );
};
