import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function Drawer({ modal, toggle, title, children, onSubmit }) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <form onSubmit={onSubmit}>
          <ModalHeader toggle={toggle}>{title}</ModalHeader>
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">
              Submit
            </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}

export default Drawer;
