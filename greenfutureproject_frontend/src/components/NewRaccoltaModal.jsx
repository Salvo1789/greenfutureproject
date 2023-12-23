import { createRaccoltaAction } from "../redux/actions";
import { useDispatch } from "react-redux";
import { Button, Modal, Form} from 'react-bootstrap'
import { useState } from "react";

const NewRaccoltaModal = () => {

    const [show, setShow] = useState(false);
    const [nome, setNome] = useState("");

    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const savedRaccolta = { nome };
        dispatch(createRaccoltaAction(savedRaccolta));
    };

    return(
    <>
        
        {/* New raccolta button */}
        <Button variant="secondary" onClick={handleShow}>
        Aggiungi Raccolta
      </Button>


      {/* New raccolta modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nuova raccolta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                autoFocus
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleClose}>
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default NewRaccoltaModal