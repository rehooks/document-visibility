import React from 'react';
import { render } from 'react-dom';
import useDocumentVis from './';

function App() {
  let documentVisible = useDocumentVis();
  console.log(documentVisible)
  return <pre>{JSON.stringify(documentVisible)}</pre>;
}

render(<App />, window.root);
