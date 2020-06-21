import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { updateProductList } from "../../redux/products.actions";
import ErrorField from "../error/Error";

const initialValues = {
  name: "",
  qty: "",
  price: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  price: Yup.number().required("Required"),
  qty: Yup.number().required("Required"),
});

const EditProduct = ({ closeModal, product, editProduct }) => {
  console.log(product.id)
  const onSubmit = useCallback((values) => {
    const userData = {
      ...values,
    };
    editProduct(product.id, userData)
    closeModal();
  }, []);

  return (
    <div className="modal-product">
      <button className="modal-product__close" onClick={closeModal}>
        X
      </button>
      <div className="block">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="block__form">
            <div className="block__product-info">
              <div className="block__description">
                <label className="label" htmlFor="name">
                  Name
                </label>
                <Field
                  name="name"
                  type="text"
                  id="name"
                  className="modal-input input"
                />
                <ErrorMessage name="name" component={ErrorField} />
                <label className="label" htmlFor="name">
                  Price
                </label>
                <Field
                  name="price"
                  type="number"
                  className="modal-input input"
                />
                <ErrorMessage name="price" component={ErrorField} />
                <label className="label" htmlFor="name">
                  Quantity
                </label>
                <Field name="qty" type="number" className="modal-input input" />
                <ErrorMessage name="qty" component={ErrorField} />
              </div>
            </div>
            <button className="btn-submit btn" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

const mapDispatch = {
  editProduct: updateProductList,
};

EditProduct.propTypes = {
  closeModal: PropTypes.func.isRequired,
  editProduct: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(EditProduct);
