import { createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composedHandcer = composeWithDevTools();
const store = createStore(rootReducer, composedHandcer);
export default store;
