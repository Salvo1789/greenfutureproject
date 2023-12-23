import { createMaterialeAction } from "../redux/actions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Form} from 'react-bootstrap'

const NewMaterialeModal = () => {

    const [show, setShow] = useState(false);
    const [nome, setNome] = useState("");
    const [note, setNote] = useState("");
    const [raccolta, setRaccolta] = useState("");
    const userCurrent = useSelector((state) => state.auth.userData);
    const user = userCurrent.id;
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const savedMateriale = { nome, note, raccolta, user };
        dispatch(createMaterialeAction(savedMateriale));
    
        // window.location.reload();
      };


    return(
        <>
        {/* New materiale button */}
        <Button variant="secondary" onClick={handleShow}>
        Aggiungi materiale
      </Button>


      {/* New materiale modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nuovo materiale</Modal.Title>
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
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                type="text"
                placeholder="note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Raccolta</Form.Label>
              <Form.Control
                type="text"
                placeholder="note"
                value={raccolta}
                onChange={(e) => setRaccolta(e.target.value)}
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

export default NewMaterialeModal