import React from 'react';
import { Container, Container1 } from './Container';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Container />
        <Container1 />
      </DndProvider>
    </div>
  );
}

export default App;
