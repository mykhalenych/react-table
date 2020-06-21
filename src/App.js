import React, { useState, useEffect } from "react";
import ProductTable from "./components/productTable/Products";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { productsListSelector } from "./redux/products.selectors";
import * as actions from "./redux/products.actions";
import NewProduct from "./components/addNew/NewProduct";

const App = ({ products, removeProduct, getProductsList }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    getProductsList();
  }, []);
  return (
    <div className="conteiner">
      <button onClick={() => setModalOpen(true)}>Add</button>
      {isModalOpen && <NewProduct closeModal={closeModal} />}
      <ProductTable removeProducts={removeProduct} products={products} />
    </div>
  );
};

App.propTypes = {
  getProductsList: PropTypes.func.isRequired,
  tasks: PropTypes.array,
  removeProduct: PropTypes.func,
};
const mapDispatch = {
  getProductsList: actions.getProductsList,
  removeProduct: actions.removeProduct,
};
const mapState = (state) => {
  return {
    products: productsListSelector(state),
  };
};
export default connect(mapState, mapDispatch)(App);
