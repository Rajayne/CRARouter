# React Router

## Vending Machine Exercise

Use the React Router to build a vending machine!

### Create App

- npx create-react-app cra-router
- cd cra-router
- npm install react-router-dom

### Requirements

1. VendingMachine component: lists snack compontent links
2. At least 3 snack components to be listed in VendingMachine
3. Clicking on snack link should update the URL and view the snack that is clicked on.
4. From each snack component, should be able to go back to main VendingMachine component.

### Further Study

1. Add copy of snack links to a site-wide navbar to display at the top of each page.
2. Highlight current page link in navbar.

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

### NavLink

Similar to `<Link>` except `<NavLink>` adds an active class to current page link.

- Can style in css by selecting a.active

```
.navbar-links a.active {
  color: white;
}
```
