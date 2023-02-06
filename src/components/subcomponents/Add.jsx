import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../../style/sub/add.css";
import axios from "axios";
import { v4 as uuid } from "uuid";

export default function Add(prop) {
  const [data, setData] = useState([{}]);
  const { setShow, selectedItem } = prop;
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get("http://localhost:2500/products");
      setData(response.data);
    };
    fetchItems();
  }, []);

  const addHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      id: small_id,
      price: e.target.price.value,
      name: e.target.name.value,
      description: e.target.description.value,
    };
    console.log(newProduct);
    axios
      .post("http://localhost:2500/product/add", newProduct)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="addModal">
      <Modal show={handleShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insert Image URL"
                name="image"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                defaultValue={selectedItem.name}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                defaultValue={selectedItem.price}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Spec</Form.Label>
              <Form.Control
                type="text"
                name="description"
                defaultValue={selectedItem.spec}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                defaultValue={selectedItem.description}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Stock</Form.Label>
              <Form.Control type="text" defaultValue={selectedItem.stock} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Sale</Form.Label>
              <Form.Control type="text" defaultValue={selectedItem.sale} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" defaultValue={selectedItem.category} />
              <Form.Select>
                {/* {data.map((type, i) => (
                  <option key={i} value={type.value}>
                    {type.category}
                  </option>
                ))} */}
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="secondary" onClick={handleClose}>
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
