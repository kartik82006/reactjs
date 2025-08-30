import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState ={
    todos:[{id:nanoid(), text:"Hello World"}] 
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            const todo ={id:nanoid(), text:action.payload}
            state.todos.push(todo)
    },
        removeTodo: (state,action)=>{
            state.todos =state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state,action)=>{
            const {id,text}= action.payload; // action will be sending a id and text pair
            const todo = state.todos.find(todo => todo.id === id); // it creates a reference in todo named const not just a copy
            if(todo){
                todo.text = text;
            }
            state.todos.push(todo)
        }
    }
})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions;

export default todoSlice.reducer;