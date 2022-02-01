import { createStore,applyMiddleware, combineReducers,compose} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";
const middleware=[thunk];

const store=createStore(rootReducer,compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
export default store;
