import { createSlice } from "@reduxjs/toolkit";



export const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        value:[]
    },
    reducers:{
        addTask: (state, action) => {
            state.value.push(action.payload);
            fetch("http://localhost:3001/tasks/addTask",{
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
        initTask: (state, action) => {
            state.value.push(action.payload);
        },
        removeTask: (state, action) => {
            state.value = state.value.filter((task)=>task.id!==action.payload);
            const index = state.value.findIndex(task => task.name === action.payload.name);
            console.log(index);
            if (index !== -1) {
                state.value.splice(index, 1);
            }
            console.log(action.payload);
            fetch("http://localhost:3001/tasks/removeTask/"+action.payload.id,{
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

export const {addTask, removeTask, initTask} = taskSlice.actions;

export default taskSlice.reducer;