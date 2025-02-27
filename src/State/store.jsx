import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducers";
import { customerProdcutReducer } from "./product/Reducers";
import { cartReducer } from "./Cart/Reducers";
import { orderReducer } from "./Order/Reducers";

const rootReducers = combineReducers({
    auth: authReducer,
    product: customerProdcutReducer,
    cart: cartReducer,
    order: orderReducer,
   

})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))