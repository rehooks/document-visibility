'use strict';

let { useState, useEffect } = require('react');

function getVisibility() {
  return document.visibilityState;
}

function useDocumentVisibility() {
  let [documentVisibility, setDocumentVisibility] = useState(getVisibility());

  function handleVisChange() {
    setDocumentVisibility(getVisibility());
  }

  useEffect(() => {
    window.addEventListener('visibilitychange', handleVisChange);
    return () => {
      window.removeEventListener('visibilitychange', handleVisChange);
    };
  }, []);

  return documentVisibility;
}

module.exports = useDocumentVisibility;
