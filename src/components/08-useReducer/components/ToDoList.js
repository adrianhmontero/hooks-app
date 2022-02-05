import React, { memo } from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = memo(({ toDoList, toggleToDo, handleDelete }) => {
    console.log('ToDoList generated')
  return <ul className="list-group list-group-flush">
      {toDoList.map((t, i)=> <ToDoItem key={i} t={t} i={i} toggleToDo={toggleToDo} handleDelete={handleDelete} />)}
  </ul>;
});

export default ToDoList;
