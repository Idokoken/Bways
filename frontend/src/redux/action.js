import { ADDPRODUCT, DELETEPRODUCT, UPDATEPRODUCT } from "./actionType";

export const addProduct = (product) => {
  return (dispatch) => {
    dispatch({
      type: ADDPRODUCT,
      payload: product,
    });
  };
};

export const updateProduct = (product) => {
  return (dispatch) => {
    dispatch({
      type: UPDATEPRODUCT,
      payload: product,
    });
  };
};

export const deleteProduct = (product) => {
  return (dispatch) => {
    dispatch({
      type: DELETEPRODUCT,
      payload: product,
    });
  };
};
