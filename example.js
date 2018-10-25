import React from 'react';
import { render } from 'react-dom';
import useDocumentVisibility from './';

function App() {
  let documentVisibility = useDocumentVisibility();
  return <p>{documentVisibility}</p>;
}

render(<App />, window.root);
