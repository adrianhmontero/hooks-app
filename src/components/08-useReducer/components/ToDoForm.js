import React from 'react';
import { useForm } from '../../../hooks/useForm';

const ToDoForm = ({ addToDo }) => {
    const [form, handleInput, resetForm] = useForm({ desc: '' });

    const handleSubmit = e => {
        const { desc } = form;
        e.preventDefault();
        const newToDo = {
            id: new Date().getTime(),
            desc,
            done: false
        };
        addToDo(newToDo);
        resetForm();
    }

    return <form onSubmit={handleSubmit}>
        <input 
            className='form-control'
            type='text' 
            name='desc' 
            placeholder='Enter a desc' 
            autoComplete='off'
            value={form?.desc}
            onChange={handleInput}
        />
        <button 
            type='submit'
            disabled={form?.desc.trim().length <= 0}
            className={`mt-3 btn btn-primary btn-block`}>Add</button>
    </form>;
};

export default ToDoForm;
