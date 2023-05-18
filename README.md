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

## URL Params

> useParams hook stores info on URL parameters

Must import { useParams } from "react-router-dom";

- useParams to create dynamic path links

```
FoodNav.js
{foods.map(food =>{
  <Link to{`/food/${food}`}></Link>
})}

Food.js
const Food = () => {
  const { name } = useParams();
  return (
    <>
      <h1>{name}</h1>
      </>
  )
}

App.js
<Route path="/food/:name">
  <Food />
</Route>
```

## Switch Component

Wrap routes in a `<Switch>` component for exclusive routing

- Returns first matching route
- Order of routes matters!

```
<Switch>
  <Route exact path="/blog/new"></Route>
  <Route exact path="/blog/:slug"></Route>
</Switch>

## /blog/new will not render /blog/:slug as well
```

## 404 Route

Catch all using `<Switch>` without specifying path.

```
<Switch>
  <Route>
    <h1>Not Found!</h1>
  </Route>
</Switch>
```

## Redirect

Two methods to redirect:

### 1. Redirect Component

import Redirect and include `<Redirect to="/path">`

> Page redirected from is not in browser history i.e. clicking AdminDashboard without validation redirects to Home, back button will not return to AdminDashboard

### 2. useHistory

Calling `.push` on the `history` object

- import useHistory
- adds URL to the session
- updates view

> The `history` object is a wrapper over browser's history API

```
const history = useHistory();

## Redirects to home after login
function login(e) {
    e.preventDefault()
    history.push('/')
}
```

## Testing

Use `<MemoryRouter>`

- import MemoryRouter
- move `<BrowserRouter>` to index.js to wrap `<App />` in MemoryRouter for testing

```
NavBar.test.js
test("renders NavBar without crashing", () => {
    render(<MemoryRouter><NavBar /></MemoryRouter>)
})
```
