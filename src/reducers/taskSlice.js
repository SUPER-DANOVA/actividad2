import { createSlice } from "@reduxjs/toolkit";



export const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        value:[
        {
            "name": "",
            "description": "",
            "dueDate": ""
        }
    ]
    },
    reducers:{
        addTask: (state, action) => {
            state.value.push(action.payload);
        },
        removeTask: (state, action) => {
            const index = state.value.findIndex(task => task.name === action.payload.name);
            console.log(index);
            if (index !== -1) {
                state.value.splice(index, 1);
            }
        }
    }


});

export const {addTask} = taskSlice.actions;
export const {removeTask} = taskSlice.actions;

export default taskSlice.reducer;