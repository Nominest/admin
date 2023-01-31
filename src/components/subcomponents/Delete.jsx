import React, { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { propTypes } from "react-bootstrap/esm/Image";
import Product from "../pages/Product";

export default function Delete(prop) {
  const { selectedItem, id, setSelectedItem } = prop;
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [data, setData] = useState([{}]);
  const [products, setProducts] = useState(data);

  const deleteHandler = (itemName) => {
    console.log("dEleted:", itemName);
    axios.delete("http://localhost:2500/products").then(() => {
      let newList = products.filter((el) => el.itemName !== itemName);
      setProducts(newList);
    });
  };

  return (
    <div className="addModal">
      <Modal show={handleShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onClick={() => handleClose(false)}>
            <Button variant="primary" type="delete">
              Delete
            </Button>
            <Button variant="secondary" onClick={() => handleClose(true)}>
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
