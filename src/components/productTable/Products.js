import React, { useState } from "react";
import PropTypes from "prop-types";
import useSortableData from "../../helpers/sort";
import EditProduct from "../editProduct/EditProuct";

const ProductTable = ({ products, removeProducts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrent] = useState({})
  const closeModal = () => {
    setModalOpen(false);
  };
  const selectItem = (item) => {
    setCurrent(item)
    setModalOpen(true)
  }

  const { items, requestSort } = useSortableData(products);
  const totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
  );
  const totalQuantity = products.reduce(
    (total, product) => total + product.qty,
    0
  );
  return (
    <table>
      <thead className="thead">
        <th className="thead-th">
          <span onClick={() => requestSort("name")}>Name</span>
        </th>
        <th className="thead-th">
          <span onClick={() => requestSort("price")}>Price</span>
        </th>
        <th className="thead-th">
          <span onClick={() => requestSort("quantity")}>Quantity</span>
        </th>
        <th className="thead-th"></th>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td>{item.qty}</td>
            <td className="center">
              <button onClick={() => selectItem(item)}>Edit</button>
              {isModalOpen && (
                <EditProduct
                  closeModal={closeModal}
                  product={currentItem}
                />
              )}
              <button onClick={() => removeProducts(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <td>-</td>
        <td>{`$${totalPrice}`}</td>
        <td>{totalQuantity}</td>
        <td></td>
      </tfoot>
    </table>
  );
};
ProductTable.propTypes = {
  removeProducts: PropTypes.func.isRequired,
  products: PropTypes.array,
};

export default ProductTable;
