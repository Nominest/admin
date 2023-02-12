import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default function Delete(props) {
  const { selectedItem, setDeleteShow, deleteShow } = props;

  console.log(selectedItem);

  function deleteHandler(event) {
    event.preventDefault();
    axios.delete(`http://localhost:2500/products/${selectedItem.id}`);
  }

  function handleCloseDelete() {
    setDeleteShow(false);
  }

  return (
    <div className="deleteModal">
      <Modal show={deleteShow} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product "{selectedItem.name}"</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={deleteHandler}>
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
