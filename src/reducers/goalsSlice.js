import { createSlice } from "@reduxjs/toolkit";



export const goalSlice = createSlice({
    name: "goals",
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
        addGoal: (state, action) => {
            state.value.push(action.payload);
        },
        removeGoal: (state, action) => {
            const index = state.value.findIndex(goal => goal.name === action.payload.name);
            console.log(index);
            if (index !== -1) {
                state.value.splice(index, 1);
            }
        }
    }


});

export const {addGoal} = goalSlice.actions;
export const {removeGoal} = goalSlice.actions;

export default goalSlice.reducer;



