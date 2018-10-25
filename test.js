'use strict';
let test = require('ava');
let { createElement: h } = require('react');
let ReactTestRenderer = require('react-test-renderer');
let useDocumentVisibility = require('./');

function render(val) {
  return ReactTestRenderer.create(val).toJSON();
}

test(t => {
  function Component() {
    return useDocumentVisibility();
  }

  t.is(render(h(Component)), 'prerender');
});
