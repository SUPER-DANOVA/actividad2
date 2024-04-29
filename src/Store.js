import { configureStore } from "@reduxjs/toolkit";
import goalReducer from "./reducers/goalsSlice";
import taskReducer from "./reducers/taskSlice";
import optionReducer from "./reducers/optionSlice";


export default configureStore({
    reducer:{
        goals:goalReducer,
        tasks:taskReducer,
        options:optionReducer
    }

})