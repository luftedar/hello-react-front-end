import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import greetingReducer from "./greetings/greetings";

const reducer = combineReducers({
  greetingReducer,
});

export const store = createStore(
  applyMiddleware(thunk)
);

export default { store };