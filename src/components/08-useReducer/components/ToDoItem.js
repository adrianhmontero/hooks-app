import React, { memo } from 'react';

const ToDoItem = memo(({ t, i, toggleToDo, handleDelete }) => {
  return (
    <li key={t.id} className='list-group-item'>
        <p className={t?.done ? 'complete' : ''} onClick={() => toggleToDo(t?.id)}>{i + 1}. {t.desc}</p>
        <button className='btn btn-danger' onClick={() => handleDelete(t?.id)}>Delete</button>
    </li>);
});

export default ToDoItem;
