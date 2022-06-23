// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const composedHandcer = composeWithDevTools();
// const store = createStore(rootReducer, composedHandcer);
// export default store;

import { configureStore } from "@reduxjs/toolkit";
// import filtersSlice from "../components/Filters/filtersSlice";
// import todoListSlice from "../components/TodoList/todoListSlice";

import filtersSlice from "../components/Filters/filtersSlice";
import todoListSlice from "../components/TodoList/todoListSlice";
const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todoListSlice.reducer,
    },
});
export default store;
