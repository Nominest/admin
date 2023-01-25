import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import { useState } from "react";
import { datas } from "../../util/data";

function MyVerticallyCenteredModal(props) {
  const [input, setInput] = useState(datas);
  const handleClick = () => {
    const arr = [
      {
        description: "",
        spec: [{ "": "" }, { "": "" }],
        name: "",
        id: "",
        image: "",
        price: "",
        stock: "",
        sale: "",
        category: "",
      },
    ];
    setInput((current) => [...current, ...arr]);
  };
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>Close</Modal.Header>
        <Modal.Body>
          <h4>Add product</h4>
          <input type="text" />
          <input type="text" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClick}>Save</Button>
        </Modal.Footer>
      </Modal>
      {/* {input.map((element, index) => {
        return (
          <div key={index}>
            <h2>{element.name}</h2>
          </div>
        );
      })} */}
    </div>
  );
}

export default function Add() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add product
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

//https://codesandbox.io/s/q23iz save
