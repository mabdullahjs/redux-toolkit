import { createSlice } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
    name: 'Todo',
    initialState: {
        todos: [{
            id: 1,
            title: 'hello world'
        }]
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: nanoid(),
                text: action.payload
            })
        },
    }
})


export const { addTodo } = todoSlice.actions 

export default todoSlice.reducer