import {
  fetchProductsList,
  addProduct,
  deleteProduct,
  updateProduct,
} from "../gateways/gateway";
import { productsListSelector } from "./products.selectors";

export const PRODUCTS_LIST_RECIVED = "PRODUCTS_LIST_RECIVED";

export const productsListRecived = (productsList) => {
  const action = {
    type: PRODUCTS_LIST_RECIVED,
    payload: {
      productsList,
    },
  };
  return action;
};
export const getProductsList = () => {
  const thunkAction = function (dispatch) {
    fetchProductsList().then((productsList) =>
      dispatch(productsListRecived(productsList))
    );
  };
  return thunkAction;
};

export const addProducts = (product) => {
  const thunkAction = function (dispatch) {
    const newProduct = {
      ...product,
    };
    addProduct(newProduct).then(() => dispatch(getProductsList()));
  };
  return thunkAction;
};

export const removeProduct = (id) => {
  const thunkAction = function (dispatch) {
    deleteProduct(id).then(() => dispatch(getProductsList()));
  };
  return thunkAction;
};

export const updateProductList = (id, product) => {
  const thunkAction = function (dispatch) {
    const updatedProduct = {
      ...product,
    };

    updateProduct(id, updatedProduct).then(() => dispatch(getProductsList()));
  };

  return thunkAction;
};
