import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
// import { propTypes } from "react-bootstrap/esm/Image";
// import Product from "../pages/Product";

export default function Delete(prop) {
  const { selectedItem, setDeleteShow } = prop;
  // const [show, setShow] = useState(false);
  const handleShow = () => setDeleteShow(true);
  const handleCloseDelete = () => setDeleteShow(false);
  // const [data, setData] = useState([{}]);
  // const [products, setProducts] = useState(data);

  console.log(selectedItem);
  function deleteHandler() {
    axios.delete(`http://localhost:2500/products/${selectedItem.id}`);
  }

  return (
    <div className="deleteModal">
      <Modal show={handleShow} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product "{selectedItem.name}"</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={deleteHandler}>
            {/* <Button variant="primary" type="delete">
              Delete
            </Button>
            <input
              type="button"
              variant="secondary"
              onClick={handleClose}
              value="Close"
            /> */}
            <Button variant="primary" type="submit">
              Delete
            </Button>
            <Button variant="secondary" onClick={handleCloseDelete}>
              Close
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}

//https://codesandbox.io/s/q23iz save
