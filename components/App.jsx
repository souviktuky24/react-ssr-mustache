import React from 'react';
import { ScreenClassProvider, Container } from 'react-grid-system';
import CreateColumn from './CreateColumn.jsx';
import SimpleTextComponent from './SimpleTextComponent.jsx';

function App() {

  return (
      <Container>
        <h1>
          Observability at Client end
        </h1>
        <h2>
          Sample Columns
        </h2>
        <CreateColumn />

        <h2>
          Observability for front-end web clients
        </h2>
        <SimpleTextComponent />
      </Container>
  );
}

export default App;
