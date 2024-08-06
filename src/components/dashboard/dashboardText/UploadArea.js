// UploadArea.js
import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "../../../styles/styles.css"
const UploadArea = () => {
  return (
    <Container fluid className="upload-area mt-3">
      <Row>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <div className="upload-text mb-3">Drag & Drop Files Here</div>
          <Form.Control type='file' style={{backgroundColor:"#6b21a8",border:"none",padding:"10px 20px"}} placeholder='Upload Your Notes'/>
        </Col>
      </Row>
    </Container>
  );
};

export default UploadArea;
