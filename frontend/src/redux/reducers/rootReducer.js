import { productReducer, productDatail } from "./productReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  productlist: productReducer,
  singleProduct: productDatail,
});

export default rootReducer;
