import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../../style/sub/add.css";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { ProductContext } from "../../App";

export default function Add(prop) {
  const { datas, setDatas } = useContext(ProductContext);
  const [cat, setCat] = useState(datas);
  const { setShow, selectedItem } = prop;
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  const fetchItems = async () => {
    const response = await axios.get("http://localhost:4500/products");
    setDatas(response.data);
  };
  const getUniqueListBy = (arr, key) => {
    setCat([...new Map(arr.map((item) => [item[key], item])).values()]);
  };
  useEffect(() => {
    getUniqueListBy(datas, "category");
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
    // axios
    //   .post("http://localhost:4500/product/add", newProduct)
    //   .then((res) => fetchItems(), handleClose())
    //   .catch((err) => console.log(err));
    const productForm = new FormData();
    productForm.append("file", e.target.image.files[0]);
    productForm.append("details", JSON.stringify(newProduct));
    fetch("http://localhost:4500/addproduct", {
      method: "POST",
      mode: "cors",
      body: productForm,
    });
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
                type="file"
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
                {cat.map((type, i) => (
                  <option key={i} value={type.value}>
                    {type.category}
                  </option>
                ))}
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
