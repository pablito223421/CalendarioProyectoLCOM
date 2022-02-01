import React from "react";
import { Button, Toast, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { eliminarNota, showActualizaNota } from "../Acciones/index";

function TituloNota(props: { note: { key: any; title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; date: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; description: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }; id: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }): JSX.Element {
  const dispatch = useDispatch();

  return (
    <Toast
      className="note"
      onClose={() => dispatch(eliminarNota(props.note.key))}
    >
      <Toast.Header>
        <strong className="mr-auto">
          {props.id}. {props.note.title}
        </strong>
        <small>
          <div>{props.note.date}</div>
        </small>
      </Toast.Header>
      <Toast.Body>
        <Row>
          <Col xs={9} style={{ paddingRight: "5px" }}>
            <small>{props.note.description}</small>
          </Col>
          <Col xs={3} style={{ paddingLeft: "5px", textAlign: "right" }}>
            <Button onClick={() => dispatch(showActualizaNota(props.note.key))}>
              Editar
            </Button>
          </Col>
        </Row>
      </Toast.Body>
    </Toast>
  );
}

export default TituloNota;