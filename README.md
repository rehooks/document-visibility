# `document-visibility-hook`

> React hook for subscribing to document visibility

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Install

```sh
yarn add document-visibility-hook
```

## Usage

```js
import useDocumentVisibility from 'document-visibility-hook';

function MyComponent() {
  let documentvisibility = useDocumentVisibility();
  // {
  //   visible: true,
  // }

  // ...
}
```
