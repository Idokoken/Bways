import { ADDPRODUCT, DELETEPRODUCT, UPDATEPRODUCT } from "../actionType";

// export const [name]InitialState = {}
export const productReducer = (state = [], action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return state;
    case UPDATEPRODUCT:
      return state;
    case DELETEPRODUCT:
      return state;
    default:
      return state;
  }
};
