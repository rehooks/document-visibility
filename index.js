'use strict';

let { useState, useEffect } = require('react');

function getVisibility() {
  return document.visibilityState;
}

function useDocumentVisibility() {
  let [documentVisibility, setDocumentVisibility] = useState(getVisibility());

  function handleVisibilityChange() {
    setDocumentVisibility(getVisibility());
  }

  useEffect(() => {
    window.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      window.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return documentVisibility;
}

module.exports = useDocumentVisibility;
