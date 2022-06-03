import React from 'react';
import { Row, Col } from 'react-grid-system';

function CreateColumn() {
  return (
    <Row>
      <Col sm={4} debug>
        One of three columns
      </Col>
      <Col sm={4} debug>
        One of three columns
      </Col>
      <Col sm={4} debug>
        One of three columns
      </Col>
    </Row>
  );
}

export default CreateColumn;
