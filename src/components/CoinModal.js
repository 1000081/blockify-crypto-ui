import React from "react";
import { Button, Modal } from "react-bootstrap";

const CoinModal = (props) => {
  return (
    <>
      <div>
        <Modal show={props.open} onHide={props.onCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{props.head}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.body}</Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={props.onCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default CoinModal;
