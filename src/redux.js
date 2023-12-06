import { thunk } from "redux-thunk";
import rootReducer from "./store/reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";

const reduxConfig = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
};

export default reduxConfig;
