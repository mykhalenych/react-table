import { PRODUCTS_LIST_RECIVED } from "./products.actions";

const initialState = {
  productsList: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_LIST_RECIVED:
      return {
        ...state,
        productsList: action.payload.productsList,
      };

    default:
      return state;
  }
};
export default productsReducer;
