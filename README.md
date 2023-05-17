# React Router

## Create App

- npx create-react-app cra-router
- cd cra-router
- npm install react-router-dom

## BrowserRouter & Routes

Must import { BrowserRouter, Routes, Route } from "react-router-dom";

- BrowserRouter stores current location in browser's address bar and navigates using history stack
- Route tells path to look for in URL and what to render
- Must wrap all Route components in `<Routes>`

### Route Props

- `exact`: (optional) does path need to match exactly?
- `path`: route for component
- `element`: component to be rendered

```
<Route exact path="/eat" element={<Eat />}/>
```

## Link Component

The `<Link>` component replaces the `<a>`

- Instead of href attribute, `<Link>` uses a `to` prop
- Clicking on a `<Link>` does not issue a GET request, JS intercepts click and processes client-side routing

```
<p>Go to <Link to="/">home</Link> page</p>
```
