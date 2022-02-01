
import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Calendario from "./Componentes/Calendario";
import AgregarNota from "./Componentes/AgregarNota";
import Notas from "./Componentes/Notas";
import ActualizarNota from "./Componentes/ActualizarNota";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const showUpdateNote = useSelector((state) => state.note.showUpdateNote);

  return (
    <>
      <header>Doodle</header>
      <div className="App">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <Calendario />
            </Col>
            <Col xs={12} md={6}>
              <Notas />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <AgregarNota />
            </Col>
            <Col xs={12} md={6}>
              {showUpdateNote && <ActualizarNota />}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;