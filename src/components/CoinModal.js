import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const CoinModal = (props) => {
  const [bottomModal, setBottomModal] = useState(false);
  const toggleShow = () => setBottomModal(!bottomModal);

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Action</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Review</h4>
          <p>
            Your crypto coin is in review process, you will receive email once
            the review completed
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CoinModal;
