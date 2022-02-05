const initialState = [{ id: 1, todo: 'Comprar pan', done: false}];

const toDoReducer = (state = initialState, action) => {
    switch(action?.type){
        case 'ADD_TO_DO':
            return [...state, action?.payload];
        default:
            return state;
    }
}

let toDos = toDoReducer();

const newToDo = { id: 2, todo: 'Ver Peacemaker', done: false};

const addToDoAction = {
    type: 'ADD_TO_DO',
    payload: newToDo
};

toDos = toDoReducer(toDos, addToDoAction);

console.log(toDos)