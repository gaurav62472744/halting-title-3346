import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as CartAddress } from "./CartAddress/reducer";
import { reducer as ProductReducer } from "./Product/reducer";
import thunk from 'redux-thunk'
const rootReducer=combineReducers({CartAddress,ProductReducer})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
