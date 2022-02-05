import React, { useCallback, useEffect, useReducer } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import './styles.css';
import { toDoReducer } from './toDoReducer';

const init = () => (JSON.parse(localStorage.getItem('toDos')) || []);

const ToDoApp = () => {
    const [toDos, dispatch] = useReducer(toDoReducer, [], init);

    const addToDo = (newToDo) => {
        const action = {
            type: 'ADD_TO_DO',
            payload: newToDo
        };
        dispatch(action);
    }

    const handleDelete = useCallback(id => dispatch({ type: 'DELETE_TO_DO', payload: id }), []);
    const toggleToDo = useCallback(id => dispatch({ type: 'TOGGLE_TO_DO', payload: id }), []);

    useEffect(() => {
      if(toDos) localStorage.setItem('toDos', JSON.stringify(toDos));
    }, [toDos]);
    

  return <div>
      <h1>ToDoApp: ({toDos.length})</h1>
      <hr />
      <div className="row">
          <div className='col-7'>
              <ToDoList toDoList={toDos} handleDelete={handleDelete} toggleToDo={toggleToDo} />
            </div>
          <div className='col-5'>
              <h4>Add toDo</h4>
              <hr/>
              <ToDoForm addToDo={addToDo} />
          </div>
      </div>
  </div>;
};

export default ToDoApp;
