export const toDoReducer = (state = [], action) => {
    switch(action?.type){
        case 'ADD_TO_DO':
            return [...state, action.payload];
        case 'DELETE_TO_DO':
            return state.filter(toDo => toDo?.id !== action.payload);
        case 'TOGGLE_TO_DO': 
            return state.map(toDo => toDo.id === action.payload ? {...toDo, done: !toDo.done} : toDo)
        default:
            return state;
    }
}