import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ExampleModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        exemplo de modal,clique-me!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal de exemplo</Modal.Title>
        </Modal.Header>
        <Modal.Body>Os modais são elementos de interface que sobrepujam o conteúdo principal da página para exibir informações importantes ou solicitar ações do usuário. Eles são usados para interações temporárias, como exibir uma mensagem de confirmação, um formulário de login, ou detalhes adicionais sobre um item.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Ação secundária qualquer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ExampleModal;
