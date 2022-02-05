import React from "react";
import { useForm } from "../../hooks/useForm";
import "./form.css";

const initialFormState = {
  name: { value: "", type: "text" },
  age: { value: "", type: "text" },
  password: { value: "", type: "password" }
};

export const CustomHookForm = () => {
  const [form, handleForm] = useForm(initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form", form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>CustomHookForm</h1>
      <hr />
      <div className="form-group d-grid gap-2">
        {Object.entries(form).map(([name, { value, type }]) => (
          <input
            key={name}
            type={type}
            name={name}
            className="form-control"
            placeholder={"Your " + name}
            autoComplete="off"
            value={value}
            onChange={handleForm}
          />
        ))}
        <button key="submitButton" type="submit">
          Guardar
        </button>
      </div>
    </form>
  );
};
