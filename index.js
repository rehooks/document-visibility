'use strict';

let { useState, useEffect } = require('react');

function getVisibility() {
  return document.visibilityState === 'visible'
}

function useDocumentVisibility() {
  let [documentVis, setDocumentVis] = useState(getVisibility());

  function handleVisChange() {
    setDocumentVis(getVisibility());
  }

  useEffect(() => {
    window.addEventListener('visibilitychange', handleVisChange);
    return () => {
      window.removeEventListener('visibilitychange', handleVisChange);
    };
  });

  return documentVis;
}

module.exports = useDocumentVisibility;
