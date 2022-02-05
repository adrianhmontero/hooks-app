import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [form, setForm] = useState(initialState);

  const resetForm = () => setForm(initialState);

  const handleInput = ({ target: { value, name } }) =>
    setForm({ ...form, [name]: value });

  return [form, handleInput, resetForm];
};
