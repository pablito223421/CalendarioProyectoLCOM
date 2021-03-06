import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { actualizarNota ,showActualizaNota } from "../Acciones/index";

function ActualizarNota() {
    const note = useSelector((state) => state.note.editTile);
    const dispatch = useDispatch();
  
    function onUpdateClick() {
      if (!document.getElementById("formUpdateTitle").value.trim()) {
        alert("Por favor ingrese un  titulo válido");
        return false;
      }
  
      dispatch(
        actualizarNota({
          title: document.getElementById("formUpdateTitle").value.trim(),
          description: document
            .getElementById("formUpdateDescription")
            .value.trim(),
          date: note.date,
          key: note.key,
        })
      );
      document.getElementById("formUpdateTitle").value = "";
      document.getElementById("formUpdateDescription").value = "";
    }
  
    return (
      <Card className={"update-note-wrapper"}>
        <h3>{`Update Note (${note.date})`}</h3>
        <Form>
          <Form.Group controlId="formUpdateTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              defaultValue={note && note.title}
            />
          </Form.Group>
          <Form.Group controlId="formUpdateDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Description"
              defaultValue={note && note.description.substring(0, 100)}
            />
          </Form.Group>
        </Form>
        <p>
          <Button variant="primary" onClick={onUpdateClick}>
            Update
          </Button>{" "}
          <Button
            variant="secondary"
            onClick={() => dispatch(showActualizaNota(false))}
          >
            Descartar
          </Button>
        </p>
      </Card>
    );
  }
  
  export default ActualizarNota;