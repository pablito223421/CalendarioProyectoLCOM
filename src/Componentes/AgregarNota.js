import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { agregarNota } from "../Acciones/index";
import { Button, Card, Form } from "react-bootstrap";

function AgregarNota() {
  const date = useSelector((state) => state.note.date);
  const dispatch = useDispatch();

  function onAddClick() {
    if (!document.getElementById("formAddTitle").value.trim()) {
      alert("Por favor un titulo que sea válido");
      return false;
    }

    dispatch(
        agregarNota({
        title: document.getElementById("formAddTitle").value.trim(),
        description: document.getElementById("formAddDescription").value.trim(),
        date: date,
        key: Date.now(),
      })
    );
    clear();
  }

  function onAddDiscardClick() {
    clear();
  }

  function clear() {
    document.getElementById("formAddTitle").value = "";
    document.getElementById("formAddDescription").value = "";
  }

  return (
    <Card className={"add-note-wrapper"}>
      <h3>{`AgregarNota (${date})`}</h3>
      <Form>
        <Form.Group controlId="formAddTitle">
          <Form.Label>Titulo</Form.Label>
          <Form.Control type="text" placeholder="Title" />
        </Form.Group>
        <Form.Group controlId="formAddDescription">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Description" />
        </Form.Group>
      </Form>
      <p>
        <Button variant="primary" onClick={onAddClick}>
          Agregar
        </Button>{" "}
        <Button variant="secondary" onClick={onAddDiscardClick}>
          Descartar
        </Button>
      </p>
    </Card>
  );
}

export default AgregarNota;
