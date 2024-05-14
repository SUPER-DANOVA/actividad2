import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";



export const goalSlice = createSlice({
    name: "goals",
    initialState: {
        value:[]
    },
    reducers:{
        addGoal: (state, action) => {
            state.value.push(action.payload);
            fetch("http://localhost:3001/goals/addGoal",{
                method:"POST",
                headers:{
                    "content-Type":"application/json",
                    "Authorization":"1234567"
                },
                body:JSON.stringify(action.payload)
            }).catch((err)=>{
                console.log(err)
            })
        },
        initGoal: (state, action) => {
            state.value.push(action.payload);
        },
        removeGoal: (state, action) => {
            state.value = state.value.filter((goal)=>goal.id!==action.payload);
            const index = state.value.findIndex(goal => goal.name === action.payload.name);
            console.log(index);
            if (index !== -1) {
                state.value.splice(index, 1);
            }
            fetch("http://localhost:3001/goals/removeGoal/"+action.payload.id,{
                method:"DELETE",
                headers:{
                    "content-Type":"application/json",
                    "Authorization":"1234567"
                }
            }).catch(err=>{
                console.log(err)
            })
        }
    }


});

export const {addGoal, removeGoal, initGoal} = goalSlice.actions;

export default goalSlice.reducer;



