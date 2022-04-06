import { combineReducers } from "redux";
import { toDoListReducer } from "./reducer/toDoListReducer";

export const rootReducer = combineReducers({
  toDoListReducer,
});
